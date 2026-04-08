---
name: Anvil — Large change
description: High-risk or large-scope features. Requires an explicit plan and multiple reviewers.
---

Goal: Implement a large change with gated verification and multiple adversarial reviewers.

Inputs:
- `proposal`: detailed description and acceptance criteria
- `size`: large (explicit)
- `reviewers`: number of adversarial reviewers (default: 2)

Example prompt text:
"Large: Add avatar upload support with server storage and tests. Provide a plan, ask for approval, then implement changes and run a full verification with 2 reviewers. Use `--no-commit` and require explicit approval before committing."

Expected outputs:
- Detailed plan and checklist
- Multiple reviewer verdicts and evidence bundle
- Final commit only after explicit approval
