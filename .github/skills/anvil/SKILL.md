---
name: anvil
description: "Anvil verification workflow — run baseline, implement changes, verify, run adversarial reviewers, and produce an evidence bundle. Use when you want safe, auditable changes to this repository."
---

What this skill does
- Runs a safety-first implementation loop: Baseline → Implement → Verify (Forge) → Adversarial review → Evidence Bundle → Commit/Rollback.
- Runs your repository's build/test/lint commands (configured below) to verify changes before committing.

Use when
- You want automated verification for edits to this repo (fixes, bug patches, features).
- You want an auditable report showing tests run, reviewer verdicts, and a rollback command.

How to use
1. Install the Copilot CLI and any required plugins (`copilot plugin install burkeholland/anvil` is optional).
2. From the Copilot interactive chat or CLI, invoke this skill by name or use one of the prompt templates in `prompts/`.
3. Choose `--dry-run` or `--no-commit` on your first runs until you trust the workflow.

Configuration (edit this file to match your project)
- `buildCommand`: the command to build your site (example: `jekyll build` or `npm run build`).
- `testCommand`: the command to run tests (example: `bundle exec rake` or `npm test`).

By default this skill will try to detect common commands. To force a command, update the `USAGE.md` and the prompt examples.

Safety
- Prompts will ask for confirmation before destructive operations (branch deletes, DB migrations).
- Use `--dry-run` or `--no-commit` to prevent automatic commits while testing.

Files in this folder
- `prompts/small.prompt.md` — quick fixes (typos, single-line edits)
- `prompts/medium.prompt.md` — bug fixes and small features
- `prompts/large.prompt.md` — large features or high-risk changes (requires explicit plan)
- `USAGE.md` — project-specific instructions and prerequisites
