Anvil skill usage for this repository

Prerequisites
- Install Copilot CLI and authenticate: see `copilot auth login`.
- Ensure your project's build and test commands run locally. For this repo (Jekyll-style static site), common commands are:
  - `jekyll build` (requires Ruby + Bundler) or
  - `bundle exec jekyll build` (if using Bundler)

Recommended safe flags
- `--dry-run` : run verifications but do not modify files or commit.
- `--no-commit` : prevent auto-commit; ask for manual commit instead.

How to customize for this repo
1. Open `SKILL.md` and set `buildCommand` and `testCommand` to the commands your site uses.
2. If your site uses `npm` for tooling, set `buildCommand: npm run build` and `testCommand: npm test`.

Example workflows
- Quick typo fix: invoke `prompts/small.prompt.md`, verify build, accept and commit.
- Bug fix: invoke `prompts/medium.prompt.md`, review plan, run full verification, inspect Evidence Bundle.

Notes
- This folder contains only Copilot skill metadata and prompts. The real Anvil plugin (burkeholland/anvil) is an upstream plugin containing the full verification engine and reviewers. You can either install the upstream plugin or use these prompts as a lightweight local workflow.
