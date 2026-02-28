---
title: 'Content Standards'
excerpt: 'Writing standards for Doxa blog posts, changelogs, docs, and product copy.'
---

## Voice Principles

- Write like a senior engineer talking to a peer.
- Lead with facts, then context, then tradeoffs.
- Prefer plain words over corporate phrasing.
- Show evidence with examples, commands, or diffs.
- Avoid hype language and vague superlatives.

## Global Rules

- Use short paragraphs and informative headings.
- State dates explicitly (`YYYY-MM-DD`) when discussing releases or incidents.
- Use active voice and concrete subjects.
- Name the exact API/class/function when relevant.
- Include migration notes whenever behavior changes.
- If a section is not applicable, explicitly say so.

## Blog Post Standard

- Open with what changed or what was learned.
- Keep one core thesis per post.
- Use subheadings every 3 to 5 paragraphs.
- Include practical examples or snippets when making technical claims.
- End with clear outcomes, next steps, or open questions.

## Changelog Standard

Each release entry should follow one consistent order:

1. Summary paragraph (what changed and why)
2. `Added`
3. `Changed`
4. `Error Handling` (or equivalent behavior section)
5. `What's Removed`
6. `Migration Guide`

If a section does not apply, include a short note, for example: "Not necessary for this release."

## Docs and READMEs

- Start with quickstart steps before deep explanation.
- Keep setup commands copy-paste ready.
- Document error cases, not just happy paths.
- Use explicit compatibility notes (runtime, framework, SDK versions).
- Include troubleshooting for common failures.

## Do

- Use concrete language: "v2 removes X" over "major changes were made."
- Anchor statements to dates, versions, and names.
- Prefer examples that mirror real usage.
- Keep tone confident but restrained.

## Don't

- Do not use filler intros or marketing-heavy claims.
- Do not leave placeholders (`TODO`, `TBD`) in published content.
- Do not hide breaking changes below feature lists.
- Do not assume reader context that can be stated in one sentence.

## Per-Project Tweaks

Projects may adjust tone and structure for audience fit, but should preserve core Doxa voice: clear, practical, and crafted.
