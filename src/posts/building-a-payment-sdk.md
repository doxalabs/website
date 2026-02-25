---
title: What We Learned Building monimejs
date: '2026-01-28'
excerpt: "Building a payment SDK taught us that the hard part isn't the API calls — it's everything around them. Retries, idempotency, types, and making failure obvious."
readingTime: 5 min read
---

**monimejs** started as a weekend project. We were integrating with Monime's payment API for a client project and found ourselves writing the same boilerplate for every endpoint — error handling, type definitions, retry logic. So we extracted it into a library.

Three weeks later, it was on npm with 12 resource modules, full TypeScript coverage, and a test suite. Here's what we learned along the way.

## The API calls are the easy part

Wrapping a REST API in TypeScript functions is straightforward. You read the docs, define the types, write the fetch calls. A junior developer could do it in a day. The hard part is everything else.

## Retries need to be smarter than you think

Our first retry implementation was simple: if a request fails, wait a second and try again, up to 3 times. This is wrong for payment APIs.

Payment endpoints can fail in ways where retrying is dangerous — a timeout doesn't mean the payment didn't go through. So we implemented:

- **Exponential backoff** — each retry waits longer than the last
- **Retry-After header support** — if the API tells you when to retry, listen
- **Idempotency keys** — auto-generated for every POST request so retries don't create duplicate payments
- **Selective retry** — only retry on network errors and 5xx responses, never on 4xx (those are your fault)

This quadrupled the code in our HTTP layer. But it's the difference between a toy and a tool.

## Types are documentation

Every response from monimejs is fully typed. Not just the success case — the error case too. When a payment fails, you get a typed error object with a `code`, `message`, and optional `validationErrors` array. You can switch on the error code in your IDE and get autocomplete.

We debated whether this level of typing was worth the maintenance cost. It is. The TypeScript compiler catches more integration bugs than our test suite does. When Monime changes their API, the types break before anything else — and that's exactly what you want.

## Make failure obvious

Every method in monimejs returns the same shape: `{ success: boolean, result?, messages }`. There are no thrown exceptions for API errors. If a payment fails, you check `success` — you don't wrap everything in try/catch.

We made this choice because payment integrations are critical paths. You should never accidentally ignore a payment failure because you forgot a try/catch block. The return type forces you to handle both cases.

## AbortController support matters

This was an afterthought that became essential. In a SvelteKit app, if a user navigates away while a payment is processing, you need to cancel the in-flight request. Without AbortController support, you get orphaned requests and confusing UI states. Every SDK that makes HTTP calls should support cancellation from day one.

## Ship it small

monimejs has zero runtime dependencies. The entire package is the SDK code, the types, and nothing else. No axios, no node-fetch, no lodash. We use the built-in `fetch` API everywhere.

For a library that lives in other people's `node_modules`, every dependency you add is a dependency you're imposing on them. Keep it minimal.
