---
slug: securing-your-container-workloads-369d18c2a006
title: Securing Your Container Workloads in Kubernetes
authors: [jake]
tags: [gke, kubernetes, security, docker]
---



![](https://cdn-images-1.medium.com/max/800/1*AcbsPGo9M5Yoco2PJOxEnA.png)

There are many places that workloads should be secured: In CI, within the cluster (securityContext & security policies), outside the cluster (firewalls), etc.

This article will specifically cover securing workloads with some Docker best practices and Kubernetes securityContext. These two sides go hand-in-hand to restrict inappropriate activities within the container.

### What Happens if I Don’t Do This (insert scare tactic here)

![](https://cdn-images-1.medium.com/max/800/0*UUdQYArq_Z4FDnFO)

Awake now? good stuff!

Let’s create a simple Dockerfile and build an image:

If we run the above image, what user do you think we’ll be using?
```bash
$ docker run --rm -it $(docker build -q .)  
**root  
uid=0(root) gid=0(root) groups=0(root)**
```
If you guessed root, you guessed right.

#### What’s wrong with letting user’s run as root?

I’m guessing if you’re reading this article, you already know the answer to that question but I’ll leave a couple brief points here that you can research further if you’re interested.

Workloads can potentially:

*   Breakout of isolation and impact other workloads or services.
*   “Mess” with the host or Kubernetes API (denial of service, data exfiltration/extrusion, etc).

We as engineers, along with the engineers of the services we consume, put in security practices to make it as difficult as possible for someone to breach our systems; hurting us and our customers.

**Restricting root within the Dockerfile is the first step in securing the workload**.

### Locking Down The Dockerfile

You saw above that when we don’t define a user in a Dockerfile we end up running as root. To avoid this, let’s start by defining a user in the Dockerfile.

Let’s go over the interesting parts quickly:

`groupadd --gid 15555 notroot`

*   Create a group with an ID of 15555 named “notroot”.

`useradd --uid 15555 --gid 15555 -ms /bin/false notroot`

*   Creates a user with a user id of 15555 and a group ID of 15555 (the group we created in the line before).
*   Set’s its default shell to nothing.
*   Names the user “notroot”.

`USER notroot`

*   Set our new user account as the default user for this Docker image.

The obvious question you’re probably asking at the moment is, “where’d you pull 15555 from?”

The ID is made up, by you, but it’s recommended that we keep the IDs above 10000 to [avoid clashing](https://kubesec.io/basics/containers-securitycontext-runasuser/) with processes running on the Kubernetes host.

### Locking Down The Deployment Manifest

We’ve now set some good practices in the Dockerfile, if we were to run this Docker image right now, we’d be:

*   Running as a non-root user
*   Restricting what we can manipulate within the file-system to our home directory (but it could also be your app directory where we need privilege).

Now that we’ve got our best-practices container, we’ll need to deploy it into our Kubernetes cluster.

Let’s take a super simple deployment like this:

After we deploy the above and check the log output we can see that the restrictions we put into the Docker image are working:
```bash
\> kubectl logs usertest-66fb6d564f-hnkpg  
**notroot  
uid=15555(notroot) gid=15555(notroot) groups=15555(notroot)**
```
Great! Thanks for reading! 👍

If only it were that simple.

We need to set some securityContext in the deployment that will tell Kubernetes, “**This is what we’re running as and this is what it is allowed to do**”.

The critical danger is that if someone were to run something inside of your non-root user of the container, it could still be escalated to root (regardless of what we’ve implemented thus far) and then do some naughty things.

#### Introducing securityContext

securityContext has more say than the Dockerfile around how the container can behave once running in the cluster, it’s built into Kubernetes, and it’s an essential security practice. Please use it!

Before we go into exactly how to add securityContext, it’s important to understand that **securityContext can be defined in two places** within a deployment:

*   [At the pod level](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#podsecuritycontext-v1-core)
*   [At the container level](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#securitycontext-v1-core)

Most of the securityContext will end up in the container spec for a good reason: When a security setting is defined in both pod and container spec and is valid in both specs, container wins.

See this excerpt from the Kubernetes source code:

I’ll summarise the above snippet:

1.  If a `runAsUser` was defined in the pod spec securityContext, save it.
2.  If a `runAsUser` was defined in container securityContext, overwrite the value we just saved in step 1.
3.  If we have a securityContext saved, return it.

The result? **container securityContext wins.**

There are some settings that should be applied at the pod level though; namely the `fsGroup` setting.

#### Adding securityContext

Let’s take our deployment manifest from before and add the essentials of a securityContext then we’ll summarise what we’ve done to finish up (The end is nigh, I promise).

Here’s our new deployment manifest:

Breaking down the new lines:

`fsGroup: 15555` We’re setting the UID of our fsGroup. This is a supplement group that facilitates mounting. I would normally just assign the same group that I built the docker image with, though it doesn’t have to be that.

`readOnlyRootFilesystem: true` Prevents modification of the root file-system. This will prevent writes to `/root` **even if you’re running as root**. This is great because it means even if someone managed to perform a privilege escalation to root inside your running container, they wouldn’t easily be able to modify system components.

`runAsUser: 15555` The UID (user id) we created when building our docker image. This is the user we are choosing to run our container with.

You might be curious, what happens if you were to set our runAsUser to UID that didn’t exist, like 1555 ?

kubectl logs usertest-85f55f4fcd-4fm6h  
whoami: cannot find name for user ID 1555

**It doesn’t exist**, and as such most likely won’t have the correct permissions to the directories you need to run your app.

The deployment securityContext really seems to get the final say (well, there’s security policies which we can touch on in another article).

`runAsGroup: 15555` The GID (group id) that the container will run with and matches what we defined in our Dockerfile.

`privileged: false` Don’t set this to true unless you have a **really** good reason; it grants the container access to the host. See [more on privileged](https://kubernetes.io/docs/concepts/policy/pod-security-policy/#privileged).

`allowPrivilegeEscalation: false` A best-effort prevention of privilege escalation.

Now that you’ve got all these good practices in place, how can you ensure they stay in place?

The answer to that is a combination of data validation in CI (Conftest) and server side policies.

I won’t cover them in this article but I will recommend that you [read my article on Conftest](https://medium.com/faun/conftest-in-ci-54503226c225?source=friends_link&sk=419d53ea9c325a9eb082772f7c2bc6c7). With tools like Conftest in CI you are able to restrict your repos so that people can’t just ignore your best practice without CI failures, potentially alerts, and approval from a designated code-owner. You put in place whatever systems work for you.

You made it! Thanks for sticking in there.

![](https://cdn-images-1.medium.com/max/800/0*sOq6Hs_WB6BYsKK3)

Hopefully this has brought you some value. If you disagree with this approach or the content of this article, please let me know in a response, I’m happy to take on contrary information.