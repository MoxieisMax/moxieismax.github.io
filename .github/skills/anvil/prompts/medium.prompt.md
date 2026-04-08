---
name: Anvil — Medium fix
description: Medium-scope bug fixes or small features. Runs full verification (build + tests + lint).
---

Goal: Implement a bug fix or small feature and run the verification pipeline.

Inputs:
- `task`: short description of the issue or feature
- `files` (optional): list of files to change or investigate
- `buildCommand` / `testCommand` (optional): override defaults

Example prompt text:
"Medium: Fix auth redirect in `_includes/nav.html` — users are redirected to /home instead of /dashboard. Run build and tests, and produce an Evidence Bundle. Use `--no-commit` unless I explicitly approve."

Expected outputs:
- Plan of changes if scope > 1 file
- Edits applied or suggested patches
- Build/tests/lint outputs and reviewer comments
- Evidence Bundle summary and commit recommendation
