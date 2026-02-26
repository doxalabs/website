---
title: 'Choosing boring technology'
date: '2026-03-12'
excerpt: 'Every team gets a few innovation tokens. We try to spend ours wisely and keep the rest of the stack as boring as possible.'
tags: ['Philosophy', 'Engineering']
---

There's a talk by Dan McKinley called "Choose Boring Technology" that changed how we think about stack decisions. The core idea: every team has a limited number of innovation tokens. Spend them on the things that actually differentiate your product. Everything else should be as boring and proven as possible.

We've taken this to heart.

## What boring looks like

For us, boring means SQLite instead of Postgres when a single-node database is enough. It means server-rendered HTML instead of a client-side SPA when the page doesn't need real-time updates. It means Go instead of a newer language when we need a reliable HTTP server.

Boring technology has documentation. It has Stack Overflow answers from 2019 that still work. It has failure modes that are well-understood. It has maintainers who have been around long enough to care about backwards compatibility.

None of this is exciting. That's the point.

## Where we spend our tokens

We're not purists about this. We write Zig for systems-level work, which is about as un-boring as it gets. We chose SvelteKit for this site instead of something more established like Next.js. We've made deliberate choices to use newer tools where they genuinely solve problems better.

The key word is "deliberate." When we picked Zig for [flags.zig](/blog/why-we-chose-zig), it was because comptime parsing and zero-allocation design are genuinely hard to replicate in other languages. The innovation token was worth spending.

When we picked SvelteKit, it was because the developer experience is materially better for content-heavy static sites. Worth the token.

But we don't spend tokens on the database, the deployment pipeline, the testing framework, or the build system unless we have a very good reason. Those are the load-bearing parts of a project, and they should be as predictable as possible.

## The hidden cost of novelty

New tools are exciting for about two weeks. Then you hit the first bug that has no Stack Overflow answer. The first version upgrade that breaks your setup. The first time you need to do something the docs don't cover.

With boring technology, someone else has already hit that bug. The answer exists. The workaround is documented. The maintainers have seen it before.

We've learned this the hard way. Early projects used whatever was newest and shiniest. We spent more time fighting our tools than building our product. Now we'd rather spend that time on the actual problem.

## Boring enables bold

Here's the thing people miss: boring technology isn't the opposite of ambition. It's what enables ambition. When your infrastructure is predictable, you can take risks on the things that matter — the user experience, the product design, the hard engineering problems.

The most impressive projects we know are built on incredibly boring stacks. They save their complexity budget for the places where complexity is unavoidable.

That's what we aim for. Boring where it doesn't matter. Bold where it does. And honest about which is which.

## A practical test

Before adding any technology to a project, we ask three questions:

1. **Could we use something we already know instead?** If yes, we probably should.
2. **Will this still be maintained in three years?** If uncertain, proceed carefully.
3. **Is the learning curve justified by the benefit?** If the benefit is marginal, the answer is no.

Most of the time, the answer is: use the thing you already know. Write the SQL query instead of adding an ORM. Use a shell script instead of a task runner. Serve static files instead of spinning up a CDN.

Boring is underrated. We're here to build products, not collect technologies.
