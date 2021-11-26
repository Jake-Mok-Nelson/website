---
title: My First Six Months as a Lead Cloud Engineer
description: >-
  I have been working for one of the major financial institutions of Australia
  for over two and a half years at this point as a consultant…
authors: [jake]
tags: [adhd, personal-journey, leadership]
slug: my-first-six-months-as-a-lead-cloud-engineer-f7abf8eac61e
---

![](https://cdn-images-1.medium.com/max/800/0*1dPfY7GJZLX-IpBt)

I have been working for one of the major financial institutions of Australia for over two and a half years at this point as a consultant. To stay that long on a project isn’t common but I’ve enjoyed the challenges of this particular client.

I had been on a single project for about two years and it started to get a little stale when a colleague asked me to join his team as the Lead Engineer working with Google Cloud Platform (GCP).

The project was to uplift and migrate the foundational infrastructure as code (Terraform). The whole concept seemed so exciting and **horribly frightening**. At this time I technically have the title of Senior Cloud Engineer (GCP) at the consultancy I work for and didn’t feel at all ready for the challenge.

### Starting the new role

My mindset going into the role was somewhat a mix of “wow, this is going to be amazing” and “Holy shit, I’m so screwed.”.

Actually, to be entirely honest, if my brain were a program it would look something like:

```go
func main() {

  imposter := true

  for {  
    println(destroySelfEsteem())  
    time.Sleep(1 \* time.Second)

    if !imposter {  
      // we'll quit looping when our imposter syndrome ends  
      // does that happen at some point?  
      break  
    }

  }  
}

// Return a random reason as to how/why   
// you're going to fuck this up.  
func destroySelfEsteem() string {

 reasonsImAnImposter := make(\[\]string, 0)  
 reasonsImAnImposter = append(reasonsImAnImposter,  
  "You're going to embarrass your employer!",  
  "You're going to sign your name to a mess that will live on for years!",  
  "You're going to destroy your credibility and end your career.",  
  "You aren't smart enough!",  
  "You have no idea what you are doing!")

 rand.Seed(time.Now().Unix())  
 message := reasonsImAnImposter\[rand.Intn(len(reasonsImAnImposter))\]  
 return message  
}
```
You get the idea…

I was in Lockdown in Melbourne, Australia. My ADHD had gone full-throttle and thinking about anything for an extended period had gotten really difficult.

![](https://cdn-images-1.medium.com/max/800/0*vdCha7a20FoLJziE)

### The Team

We started with 5 engineers on the team that was responsible for this uplift and migration.

I had to start hosting meetings, organising work, and publicising my designs via workshops and large team showcases. For someone with social anxiety disorder, this was crippling. The idea of not only doing design work but sharing it with a group potentially upwards of 50 people, well, that’s a lot for me to handle. Some days **I honestly could barely handle a gathering with three or four people** as my imposter syndrome was starting to win.

### Some Learnings

As time progressed I would continuously push my comfort zone. It was stressful and horrible at times but like exposure to most things, I became desensitised to it over time and eventually started doing fine and eventually doing a lot better than fine (in my arrogant opinion).

There was a lot of learnings on the way as I’ve improved. I’ve learned some of these the hard way so I figure sharing them with you might help you on your own progression (I hope? Let me know if they do!).

#### Acknowledge your weaknesses

I had explained to a few members of my team that my ADHD had gone full-throttle and I was struggling in social situations. The very next meeting with an external team where I would be expected to provide answers, the team attended and jumped in when I was being asked questions. Each of them answered questions in their areas of expertise to cover my ass and help me out. It was so god damn wholesome and to this day is one of the most amazing professional experiences of my life. Your team members each have things they know very well, don’t hesitate to lean on them to cover your weaknesses, you don’t have to know everything.

#### The most confident person in the room is sometimes full of shit.

You know the one, they say it with conviction, and you don’t know better so you don’t challenge it. It sounds like it **could** be true, so they probably know what they are talking about. I’ve seen this a lot over the past few years but also as I’ve learned new things I’ve realised it gets to a point where you start to see through the bullshit.

If you aren’t comfortable with something someone is saying, and it doesn’t sound right, **ask them to explain it**. If it’s not the appropriate venue/time, ask them if they can take it offline with you and help you understand. You know, come to think of it, I think this might have been me a couple times (sorry!). You don’t always know everything (nobody does), and software/infrastructure can be heavily opinionated.

**People will get it wrong sometimes. Challenge them!**

#### Don’t accept the status quo because it’s not in your job

It’s so easy to fall into that pattern, the common phrase is “well, that’s the way it’s done” or “that’s the way we’ve always done it”.

Sometimes things fall out of the scope of our work and offer a minimal benefit to us but a much larger benefit to others or the company as a whole. When you see those opportunities, take them!

**10 minutes here and there for a larger benefit to everyone is a total win, even if you are slightly less productive.**

#### Challenge teams on their promises

When you see a system that fails often, ask the owners publicly where the observability is for that system, where are their service level agreements (SLAs) aka promises to their customers around reliability. Hold teams accountable so that people are aware things need to be fixed. Obviously don’t be rude about it but **asking someone why their infrastructure keeps falling over is a fair question!**

If a platform promises you 99.9% uptime and it doesn’t “feel” like it is that reliable. Ask them how they know they are up 99.9% of the time, if the metrics / service level indicators (SLIs) they use are either non-existent or irrelevant, then they don’t actually know how often their system is up and it should be raised as an issue/risk to be fixed.

An example of a shitty but common SLI would be uptime by pinging a server. Does the server respond? Then the service is up, right? Well, maybe not, what if the application on the server crashed but the server itself is fine?

#### Get engaged with your team

At first my team mix was a little confusing and not everyone seemed completely engaged. Morale was pretty low and our goal didn’t seem entirely achievable in the quality we wanted to deliver. I found that by asking people what they **wanted** out of working on that team or what kind of work they would most enjoy, that they were more receptive.

I also felt as the lead that it was my responsibility to handle a lot of the decision making and design work but I found that **when I started trusting my team to make decisions** for themselves or setup workshops and run with them to reach a decision that **they were a lot more engaged** in what they were doing.

A bit more on this because it is actually so important!

The team scrum master and our delivery lead set up a three day workshop in which we would all sit in a room together each day with exception of lunch (provided by my employer; thanks, folks!) and during this workshop we broke down all the tasks required for our epic and plotted exactly where these tasks would come along in the timeline. There’s been plenty more work that’s popped in during that time but just **having everyone see the timeline and how the work fits into the bigger picture seemed to make the work more feasible and real to the team.**

![](https://cdn-images-1.medium.com/max/800/0*t_eQvv8FICgPx-VL)

#### Support downtime

Don’t expect your team to be at 100% all the time. **It’s not even remotely practical.** Account for sick days, personal learning/growth time, team building time, workshops, knowledge sharing sessions, support time, bureaucracy, and showcases.

People will be sick, lose loved ones, there will always be factors! Also, **depression in a pandemic is a real fucking thing!** Support your team mates. My employer has a principle called “In It Together”, which basically means that we look out for our colleagues wherever we can. Whether that’s offering support during a hard time or just supporting their growth. It is one of the best principles any company can have I think.

#### Embrace differences

Some people are analytical, some are passionate, some are critical, and others eager to learn. Finding and supporting those differences to enable people to do what they are good at or grow in areas they aren’t is essential to their happiness and **if we aren’t happy, what’s the point anyway?** Back to my point earlier, **ask your team mates what they want to do and try your best to fit it in** (it’s not always practical, like everything, moderation is key).

#### Acknowledge your failures and share them

**We all make mistakes, it’s okay to admit that you’ve made one.** I’d trust and admire someone who makes a mistake and admits it over someone who never _seems_ to make them.

#### Share in your teams accomplishments

If one of your team members has accomplished something, recognise that publicly. **They deserve it.** Not all initiatives are successful but they usually result in learnings either way. Support individual interest, passion, and experimentation.

### TL;DR aka Summary, aka WTF at this 20 page essay

*   Support people in doing what they love.
*   Share your failings with your team, you aren’t perfect you arrogant bastard!
*   Share their value, the things they bring to the team and their accomplishments.
*   Challenge others on their promises to you but also… don’t be a dick about it.
*   Challenge everything!

Thanks for reading my boring article on why I’m a better lead than you! Have a great week!