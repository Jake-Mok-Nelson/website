---
slug: building-a-robust-ci-pipeline-for-golang-with-google-cloud-build
title: Building a Robust CI Pipeline for Golang With Google Cloud-Build
authors: [jake]
tags: [Golang, CloudBuild, CICD, Devops]
---

![](https://cdn-images-1.medium.com/max/800/0*umomKey8NFhaS0Qh)

I’ve written this article specifically for Go developers who are interested in CI within GCP — so if that’s you, you’re in the right place! I will intentionally skip steps along the way but where possible, I’ve included links to other tutorials or documentation on the steps excluded for those who would like to build or refresh their skills.

After you’ve gone through this tutorial, you should have the basic structure of a robust and secure CI pipeline for use with many different Go projects.

The software industry as a whole, has adopted build pipelines as a means to deliver reliable, deterministic, and production ready applications. To achieve these intrinsic goals in this example we will create multiple steps in our build pipeline to assist us, such as editor-config checks, linting, Go tests, and secure code analysis. This ensures that our resulting artefact has passed every one of our high standards.

When you first log into Google Cloud Platform you already have a project created for you but if you want to make it easy to destroy/clean-up after this at the end, feel free to [create a new project](https://cloud.google.com/resource-manager/docs/creating-managing-projects) now.

#### What is Cloud Build?

Google Cloud Build gives us an environment in which we can run tests, build/compile, or push artefacts/images.

In Google’s own words:

> Google Cloud Build lets you build software quickly across all languages. Get complete control over defining custom workflows for building, testing, and deploying across multiple environments such as VMs, serverless, Kubernetes, or Firebase.

It runs a series of steps specified in a cloudbuild.yaml file using a specific docker image as the environment for each step whilst sharing a common workspace between steps.

#### Forking and Cloning the Demo Repo

Since this article is aimed at Go developers I’ll assume you know how to [fork a repo](https://help.github.com/en/articles/fork-a-repo) and [clone it to your local machine](https://help.github.com/en/articles/cloning-a-repository).

![](https://cdn-images-1.medium.com/max/600/1*aJqBogsyZQw00d-MxyQe9w.png)

Once you have a local copy of [the repo](https://github.com/Jake-Mok-Nelson/Golang-CI-Demo), browse the contents and you’ll see a couple of dotfiles that we’ll reference later along with our application code.

When using Go within Cloud Build we need to specify our default $GOPATH and our application code then lives under that. In this example src is our $GOPATH.

#### Creating our First CloudBuild Trigger

[Open Cloud Build](https://console.cloud.google.com/cloud-build/) or [login to the GCP Console](https://console.cloud.google.com) and search for it.

![](https://cdn-images-1.medium.com/max/600/1*_R-GsbOyI0nzX-6HbpjhWg.png)

If it’s your first time using Cloud Build you’ll be prompted to enable the API so go ahead and do that.

![](https://cdn-images-1.medium.com/max/600/1*QZufkeJ4mYHGEQRIlcYG7A.png)

It takes a minute to enable the API, once complete, you’ll be able to create a trigger.

Select your source, we’ll use Github.

![](https://cdn-images-1.medium.com/max/800/1*zuZPcQ_vh-cY1ahnsY_NWw.png)

Authorise Github and choose the repository you want to trigger on (the fork).

![](https://cdn-images-1.medium.com/max/600/1*iq5vwqK5smT63q_E_ztulw.png)

In the trigger settings, you can customise **what** should trigger a build.

For our CI, we want a push to **any** branch to trigger the pipeline. We want to test before anything gets merged into master.

Under Build configuration, we want to use a Cloud Build configuration file aka our cloudbuild.yaml file.

Create the trigger and review it on the next screen.

![](https://cdn-images-1.medium.com/max/800/1*uvPhCibATmYWvNu7t1SxQQ.png)

#### The Cloud Build Configuration File (cloudbuild.yaml)

If you browse the local repo you’ll see a cloudbuild.yaml file will already exist and you won’t need to create it.

The cloudbuild.yaml file provides Google Cloud Build with a set of instructions (steps) to perform in the CI pipeline. You could have a range of steps from linting, testing, and finally pushing a resulting artefact.

**_Note_**_: For the purposes of simplification I am using Docker-hub as a source for some of these images. A more secure practice would be to build the images yourself and store them in Google Container Registry for use in your cloudbuild.yaml files._

steps:  
  # see [https://www.npmjs.com/package/editorconfig-checker](https://www.npmjs.com/package/editorconfig-checker)  
  - id: eclint  
    name: "e53e225/editorconfig-checker"

  - id: go\_version  
    name: "gcr.io/cloud-builders/go"  
    args: \["version"\]  
    env: \["GOPATH=."\]

  - id: go\_linter  
    name: "golangci/golangci-lint"  
    args: \["golangci-lint","run"\]

  - id: go\_test  
    name: "gcr.io/cloud-builders/go"  
    args: \["test","helloworld"\]  
    env: \["GOPATH=."\]

  - id: go\_security  
    name: "securego/gosec"  
    args: \["helloworld"\]  
    env: \["GOPATH=."\]

  - id: your\_step\_here  
    name: "gcr.io/cloud-builders/go"  
    args: \["run","helloworld"\]  
    env: \["GOPATH=."\]

Each of the steps you see above run sequentially within Cloud Build and call an action against the docker image specified by the name field. I’ll go through each of the steps below and explain what they do to support your CI pipeline.

#### Cloud-Builders

You may notice that for some of the step names (or source docker images) the path can contain “**gcr.io/cloud-builders**/go”, this means that we’re using a [cloud-builder](https://cloud.google.com/cloud-build/docs/cloud-builders) image that Google provides us within GCP. These images can have several advantages such as:

*   Cached credentials with the service for which they are built (e.g. gcr.io/cloud-builders/git can write to Google Source Repositories)
*   Well maintained (e.g. cloud-builders/go is usually consistent with the latest release of Go)
*   They are within GCP meaning that the images don’t need to be pulled from a third party like [DockerHub](https://hub.docker.com/)
*   There’s a [community library](https://github.com/GoogleCloudPlatform/cloud-builders-community) for the services that aren’t maintained by Google.

#### Eclint Step

The Eclint step validates the .editorconfig file located in the root of the repo.

![](https://cdn-images-1.medium.com/max/800/1*KH-MyQEt6h35u1UwRGYD6Q.png)

The .editorconfig file enforces formatting standards such as whether indents should be tabs or spaces. Editors like VSCode will read the file and behave according to the formatting defined in this file.

![](https://cdn-images-1.medium.com/max/800/1*W9xuhsYsaLOys5GseQBwMw.png)

#### Go Version Step

![](https://cdn-images-1.medium.com/max/800/1*VSu43-tAzeog3m3YGTDyRA.png)

While this step isn’t actually required, I find it useful to output your version of Go within CI. If your pipeline breaks suddenly or if a new issue comes up, you can check the version mentioned in the logs and see if it’s changed. This can give you a good starting point to troubleshoot.

#### Linter Step

![](https://cdn-images-1.medium.com/max/800/1*KfPevLj_elFAfJf02a-mKQ.png)

[GolangCI-Lint](https://github.com/golangci/golangci-lint) is a great tool for picking up issues before they make it into production. It’s fast as hell, the developers boast 5x the speed of Gometalinter. I’ve had fantastic results using it and of course the reduced build times are a huge bonus.

#### Testing Step

![](https://cdn-images-1.medium.com/max/800/1*MYPJRPtUv-2Mco0Q-JydLw.png)

Just good old fashioned Go tests, make sure you run them! You could also output your coverage and validate that you’re meeting your code coverage requirements here too but I might cover that in a separate article for the purposes of brevity.

#### Security Check Step

![](https://cdn-images-1.medium.com/max/800/1*aSkh-jZi2I7ohXD3yX73Ng.png)

It’s important to analyse the code for common security issues. It’s easy to put in place temporary workarounds to solve problems, and that’s fine but we have to make sure those **never** make it into production.

We can solve this problem by using a security analyser like [Gosec](https://github.com/securego/gosec). Gosec is a fantastic tool that will detect failures to comply with security standards and force a Cloud Build failure.

![](https://cdn-images-1.medium.com/max/800/1*ARl2ua1-DrLgYnX8EnKvQg.png)

That’s it! You’ve just managed to build a solid foundation for whatever your application code may be. This tutorial uses Go as an example but you can just as easily apply the same principles to other languages. In following this tutorial you have:

*   Enforced editorconfig standards so that the whole team is on the same page with formatting
*   Linted the application code to ensure it meets our formatting standards and syntactically makes sense
*   You’ve run any tests included in your application
*   You’ve analysed the code for common security issues

#### Continuing on your own

Replace the your\_step\_here in the cloudbuild.yaml with something that builds or pushes your results. Here are some ideas to get you started.

*   Append a Go build step to compile your code and then push it to a Google Storage Bucket.
*   Deploy a Golang Google Cloud Function.
*   Build a docker image and push it to the container registry.

![](https://cdn-images-1.medium.com/max/800/1*dDN8zqVRJi-yT-8OqC3kUQ.png)

If you’re interested in seeing an article around any of those steps let me know and I’ll write them up for you.