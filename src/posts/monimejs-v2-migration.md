---
title: 'Monime.js v2: Migration Guide'
date: '2026-02-26'
excerpt: 'Monime.js v2 ships with a cleaner API surface, better error handling, and full TypeScript strict mode support. Here is what changed and how to migrate.'
tags: ['Changelog']
---

Monime.js v2 is out. This is a breaking release — the API surface is smaller, stricter, and easier to reason about.

## What changed

**Simplified initialization.** The `createClient()` factory now takes a single config object instead of positional arguments.

```typescript
// v1
const client = createClient('sk_live_xxx', 'SLE', { timeout: 5000 });

// v2
const client = createClient({
  apiKey: 'sk_live_xxx',
  country: 'SLE',
  timeout: 5000
});
```

**Strict TypeScript.** All public types are now exported from the root. No more reaching into internal paths.

**Better error handling.** Payment errors now extend a base `MonimeError` class with structured `code`, `message`, and `retryable` fields.

```typescript
try {
  await client.charge(params);
} catch (err) {
  if (err instanceof MonimeError && err.retryable) {
    // safe to retry
  }
}
```

**Removed deprecated methods.** `client.pay()`, `client.checkStatus()`, and `client.refund()` are gone. Use `client.charge()`, `client.getTransaction()`, and `client.reverse()` instead.

## Migration steps

1. Update the package: `npm install monimejs@latest`
2. Change `createClient()` calls to use the config object
3. Update any `try/catch` blocks to use `MonimeError`
4. Replace deprecated method names
5. Run `tsc --noEmit` to catch any remaining type issues

That's it. Most codebases should migrate in under 10 minutes.
