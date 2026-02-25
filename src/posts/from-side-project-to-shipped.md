---
title: 'From side project to shipped'
date: '2026-03-05'
excerpt: 'Most side projects die in a drawer. Here is what we have learned about actually finishing things and getting them out the door.'
readingTime: '5 min read'
---

Every developer has a graveyard of half-finished projects. Folders with names like `todo-app-v3`, `my-cool-idea`, `untitled-2`. We're no different. The difference is that we've started shipping more of them — and the shift wasn't about working harder.

It was about working smaller.

## The trap of ambition

The projects that never ship almost always share the same trait: scope that grew faster than motivation. You start with "I'll build a simple task manager" and three days later you're designing a plugin system. The foundation is never quite right. The architecture needs one more refactor. And then something else catches your eye, and the project joins the graveyard.

We fell into this trap repeatedly until we adopted a rule: **build the smallest thing that's actually useful, then stop.**

Not "stop forever." Stop and ship. Put it in front of someone. Write a README. Push it to GitHub. Tag a release. The act of shipping — even something tiny — changes your relationship with the project entirely.

## Cut scope, not corners

Shipping small doesn't mean shipping sloppy. When we built [flags.zig](/blog/why-we-chose-zig), we didn't include every feature a CLI parser could have. No shell completions. No help text generation. No config file integration. But what we did ship was solid: type-safe, tested, documented.

The goal is a narrow feature set executed well, not a broad feature set executed poorly. You can always add shell completions in v2. You can't retroactively add quality.

This is the distinction people miss. Cutting scope means removing features. Cutting corners means removing quality. One gets you to ship. The other gets you to regret.

## The README test

Before writing code, we write the README. Not the whole thing — just the first section. What does this project do? Who is it for? What does the usage look like?

If you can't write a clear README in 15 minutes, the project isn't ready to build yet. The idea is still too vague, or the scope is too broad. The README forces clarity.

This habit has killed more bad ideas than any technical review ever could. And the ideas that survive the README test tend to ship.

## Deadlines are a gift

We give ourselves deadlines. Not arbitrary ones — meaningful ones. "Ship the first version before the end of the month." "Get a working demo by Friday." "Publish the blog post the same day you tag the release."

Deadlines create pressure, and pressure creates decisions. Without a deadline, every decision gets deferred. With one, you're forced to choose: is this feature essential for v1, or can it wait?

Most features can wait. Discovering that is liberating.

## Finishing is a skill

Nobody talks about finishing as a skill, but it is. Starting projects is easy — it's all possibility and no friction. Finishing is hard — it's all friction and diminishing returns. The last 10% of a project takes 50% of the effort, and it's the part that matters most.

Writing docs. Handling edge cases. Setting up CI. Writing the announcement. These aren't glamorous, but they're the difference between a project and a product.

We've gotten better at finishing by making it a habit. Every project gets a README, a license, and at least one tagged release. Every library gets basic tests. Every tool gets a usage example. These aren't optional — they're part of the definition of done.

## Ship, then iterate

The projects on our [portfolio](/projects) didn't arrive fully formed. flags.zig started as a weekend experiment. monimejs was extracted from a client project. microblog was a learning exercise that turned into something useful.

They all shipped small and grew from there. That's the pattern. Not perfection on day one — just something real, something usable, something out the door.

If you've got a project sitting in a drawer, here's our advice: cut it in half, write the README, and ship it this week. You can always make it better. But only if it exists.
