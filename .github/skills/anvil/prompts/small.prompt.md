---
name: Anvil — Small fix
description: Quick, low-risk edits (typos, single-line fixes). Runs build and quick verify.
---

Goal: Make a minimal change and verify the site builds cleanly.

Inputs:
- `file`: path to file to edit (example: `_guides/660-vs-850.md`)
- `change`: short description of the change (example: "Fix typo: 'teh' -> 'the'")
- `buildCommand` (optional): command to run to build the site; default will be detected.

Example prompt text:
"Small: Fix typo in `_guides/660-vs-850.md` — change 'teh' to 'the'. Run the site build and show any build errors. Use `--dry-run` by default."

Expected outputs:
- One-line patch or suggested edit
- Build command output summary (success/failure)
- Commit suggestion and rollback command
