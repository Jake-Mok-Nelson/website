---
slug: programming-is-for-everyone-not-just-developers
title: Programming is for everyone, not just "Developers"
authors: [jake]
tags: [programming]
---


Programming is for everyone, not just “Developers”

![](https://cdn-images-1.medium.com/max/800/0*3FZTfcDlDbOCYpuz)

I remember being in primary school when I was asked what I wanted to be when I “grow up”. I answered “Computer programmer” without even knowing what that meant.

Programming for a career is usually referred to as being a Developer. I’ve been programming in some fashion since I was a teenager but I’ve never had the job of “Developer”.

At this point in my career I’m a DevOps engineer/consultant. DevOps is more a methodology or a philosophy than a single job but in terms of a job, you could think of it as someone who works in both the systems operations space and assists with development but does it in a repeatable, reliable, deterministic way. It’s a kind of jack of all trades role where you are responsible for setting a good example when it comes to code, infrastructure, and other technological tastiness. If you didn’t get this paragraph, don’t stress, it’s not required to understand the rest; here, have a cute fluffy and calm down.

![](https://cdn-images-1.medium.com/max/800/0*GkOLsjOWBjnM6Ckk)

I’ve written code in some capacity for almost every job I’ve had. It starts with seeing something that happens often but is simple and tedious.

People underestimate the cost of repetitive tasks. Almost everyone will have at least some kind of boring, horrible, tedium in their work.

There’s been times in my career in tech where problems have re-occurred time and time again simply because of a way a product works. Whether it’s Microsoft Windows, some server or network hardware provider.

### A few examples to illustrate where programming is useful

#### The tech example

Say one of these issues would come up unexpectedly on average once per month, and it takes 2 minutes to understand that this is that troublesome problem again that’s happened so many times before, then it takes 10 minutes to fix.

OK! We’re at 12 minutes lost! Not **too** bad, right? It’s just 12 minutes, you could easily lose that in meeting that runs over or in the bathroom if you’ve been particularly adventurous with take-away the night before.

But what about what we were doing when someone called us about that issue? Well, we’ve got to get back to that, say that takes us 5 minutes to get back into the rhythm of what we were doing.

OK! We’re at 17 minutes! It’s not great but it’s not a crisis, right?

Wait, this wasn’t a once off, this was the one time it occurred this month.

How long has this been happening? It’s been happening for the last 3 years? So we’re actually at **612 minutes lost for this one issue**!

Things we didn’t factor in:

*   Who else was affected by the issue?
*   Did they call up straight away or did they give up in frustration only calling you after wasting hours?
*   What would happen if you quit and someone replaced you that didn’t know how to fix this issue in 12 minutes? What if it was hours instead?

You can see how it quickly adds up if unattended.

I had this exact problem at a company in my early 20s where I worked on a IT helpdesk. The vendor refused to patch it so I wrote a script (a short piece of code, normally less than single page) that would be deployed as a scheduled task on any servers that run this software.

### The office coordinator

Let’s say we’ve just been promoted to a role responsible for keeping the good work flowing in the office. Others depend on us for our administrative and processing skills. We have ideas for things we can improve in the office but our managers insist on sending us 150 page reports that we need to filter for relevant things to pass on to the team.

We do it weekly, it’s “The Big Weekly Report” and our colleagues depend on it.

We spend 30 minutes a week doing it but it’s not hard. All we have to do is create a document from the section of the document for the Accounting department at page 3–8, then create another one for the Marketing department with pages 9–15, and so on a whole bunch more times ruining not only our morning but any shred of self-esteem we had left.

Let’s say our predecessor has been doing this manually for the past 4 years at 30 minutes per week.

Our predecessor wasted 6240 minutes or **90 hours of their life**, seeing the problem?

![](https://cdn-images-1.medium.com/max/800/0*O3aTFHJ7N0--vgOG.jpg)

#### The creative

There’s insanely creative people out there that are solving problems all time with programming whilst not technically being developers.

We’ve got our traditional canvases, materials, instruments, but programming has become so simple and accessible through abstraction (the hiding of complexity).

You can use code to play with concepts ideas, or use it as a new creative medium entirely.

Andrew Sorensen from Brisbane Australia teaches us how we can use code to work with instruments and synths.

Imogen Heap demonstrates a new kind of musical instrument where a solo artist can simulate multiple instruments at once while singing.

People are going further than this and instead using Artificial Intelligence as an instrument or artistic tool in itself. They create models and feed in data that results in something. Whether or not something created by a machine could be considered music is controversial but you can’t deny that it’s somebody’s creative output.

If you provide it with enough novels for context, you can get back a novel.

If you provide it with enough images of a type of art, you can get back an original piece of art in that style.

If you provide it with Eurovision, you get back… Eurovision:

### OK, I’m sold, I want to learn to program, how do I learn?

So often at this point the question becomes “What’s the best programming language?” This is the **wrong** question.

There are so many languages, some of them are easier than others. But the question you should really be asking is:

### **What is the best language for what I want to accomplish?**

#### You want to automate office tasks

If the work you need to automate is around Excel and Word, you’d want to find out how Microsoft Office Macro’s work and start with a [beginner guide](https://support.office.com/en-us/article/quick-start-create-a-macro-741130ca-080d-49f5-9471-1e5fb3d581a8#:~:text=If%20you%20have%20tasks%20in,your%20mouse%20clicks%20and%20keystrokes.). Microsoft macros tend to be in a language called vbs (Visual Basic Script), but you can also interact with it in other languages if you need to.

#### You want to automate scientific tasks or web interaction

If you need to get some information from the web and put it in a report, you could probably look at simple high level language like [Python](https://www.python.org/). If you work in a science related field there’s additions to the Python language that are built for you like [SciPy](https://www.scipy.org/).

Golang is gaining a bit of traction here as well but I would say it is slightly harder than Python.

#### You need to work with music?

Python’s a great candidate for that as well with stuff like [Sonic Pi](https://sonic-pi.net/).

If you want to interface with robotics or something else that’s physical from a small computer like a Raspberry Pi then Python is a great idea.

If you wanted to work with electronics that are lower level and perhaps more efficient, you would need a slightly more complex language like C or one of it’s variants. Arduino’s use their own C like language for example.

#### You need to automate things in the Cloud?

Maybe you need to generate reports from billing information, or you need to track assets. These high level tasks can be done with a fairly simple script in Bash or Powershell.

If you need to do more complex tasks like collate information from multiple cloud providers or cloud projects, represent them in a unique way you might be working with Golang or again potentially Python.

If you need to create infrastructure from code in a deterministic way you’d probably be looking at something like Terraform (which runs on Golang behind the scenes).

### I’ll leave you with these points to ponder:

*   Do you have friends that know how to program/code? One thing I’ve learned from working with developers is if you **want to learn** something, ask them, they are almost always happy to instruct even if it costs them time.
*   Calculate how much time a task really costs, not just once, but every time. Make assumptions that problems and **repetitive tasks will go on for years**, because in my experience, they do if you let them.
*   If you could automate most monotonous tasks that you do, how much more time would you have and what would you want to do with it?

> My favourite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time. — Steve Jobs