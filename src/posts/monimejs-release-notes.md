---
title: 'monimejs: Changelog'
date: '2026-02-27'
excerpt: 'Release notes for monimejs, including breaking changes and migration steps.'
tags: ['Changelog']
---

This page tracks notable monimejs changes. Each release includes a short summary first, followed by concrete changes and migration notes.

## 2026-02-20

This release changes how the package is authored internally. The SDK source moved from TypeScript to JavaScript with JSDoc typing, while preserving the public developer experience for TypeScript users.

### Added

- No new public API surface was added in this release

### Changed

- Internal codebase migrated from TypeScript to JavaScript + JSDoc
- Build and type generation flow updated to keep published type definitions intact
- Packaging simplified to reduce maintenance overhead

### Error Handling

- No error-handling behavior changes in this release

### What's Removed

- No public SDK methods or exports were removed in this release

### Migration Guide

- No migration steps are necessary for most users
- If your project imports internal package paths, switch to root exports from `monimejs`

## 2026-01-15

This is the initial public release of `monimejs`. It established the class-based client API, typed exports, and structured SDK error classes.

### Added

- `MonimeClient` class-based client initialization with a single options object
- All public types exported from the root
- New error class hierarchy for structured exception handling
- Core payment modules including payment code creation, payment lookup, and financial transaction operations

### Changed

- Not necessary for this release. This was the first public version.

### Error Handling

`monimejs` throws SDK error types. API failures from Monime are exposed via `MonimeApiError`, including Monime-provided error details.

```javascript
import { MonimeClient, MonimeApiError, MonimeValidationError, MonimeNetworkError, MonimeTimeoutError } from "monimejs";

const client = new MonimeClient({
  spaceId: "spc-your-space-id",
  accessToken: "your-access-token",
});

try {
  const { result } = await client.paymentCode.create({
    name: "Order #1234",
    amount: { currency: "SLE", value: 1000 },
  });
} catch (err) {
  if (err instanceof MonimeValidationError) {
    console.log("Validation failed:", err.issues);
  } else if (err instanceof MonimeApiError) {
    // Monime API response details are available here
    console.log("API error:", err.code, err.reason);
    if (err.isRetryable) {
      // safe to retry
    }
  } else if (err instanceof MonimeNetworkError) {
    console.log("Network error:", err.cause);
  } else if (err instanceof MonimeTimeoutError) {
    console.log("Request timed out:", err.timeout, err.url);
  }
}
```

### What's Removed

- Not necessary for this release. This was the first public version.

### Migration Guide

- Not necessary for this release. This was the first public version.

---

## Cross-Version Migration Notes

1. Update the package to latest:
   ```bash
   npm install monimejs@latest
   ```

2. Keep using class-based initialization:
   ```javascript
   const client = new MonimeClient({
     spaceId: 'spc-your-space-id',
     accessToken: 'your-access-token',
     timeout: 30000,
   });
   ```

3. For 2026-02-20 changes, no public API migration is required unless you used internal source paths.
4. Catch typed SDK errors (`MonimeApiError`, `MonimeValidationError`, `MonimeNetworkError`, `MonimeTimeoutError`) when handling failures.
