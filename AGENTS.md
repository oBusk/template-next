<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## pnpm

> pnpm may have changed since your training data. The core CLI is unchanged; where syntax looks unfamiliar, check `pnpm help`.

### `@obusk/pnpm-plugin-defaults`

This project uses a config dependency `@obusk/pnpm-plugin-defaults` which sets some more opinionated defaults for security and stability. Config dependencies are not updated by `pnpm update` but with `pnpm add --config @obusk/pnpm-plugin-defaults`.

### Security policies

pnpm in this repository will...

- not resolve releases that are less than 72 hours old, unless they are exempt in `pnpm-workspace.yaml`.
- refuse to install packages that lack provenance or trusted publishers, if any older release does have it. This can also be overridden in `pnpm-workspace.yaml`.
- not execute install scripts by default, but must be explicitly enabled in `pnpm-workspace.yaml` for each package that needs it.

**Do not change any of these settings.** If an install is blocked, stop and ask the developer. The block is the policy working; routing around it installs the package the policy rejected.

- Avoid using `-i` or `--interactive` flags since they will hang.
- To execute locally installed packages, use `pnpm exec <package>`, this will ensure you run the locally installed package and don't accidentally download it anew.
- `pnpm update` and `pnpm outdated` cover more than `dependencies` and `devDependencies` — they also check `engines.node`, `devEngines.runtime` and the GitHub Actions pins in `.github/workflows/*.yml`.
- To find out whether a package is installed and at what version, use `pnpm why <package> --depth 0 --json`. It reports every resolved version and what depends on it. Do not parse `pnpm-lock.yaml` or read `node_modules/`.
- `pnpm clean` will delete all `node_modules` folders in the workspace, which can be useful if in a bad state.

## Code comments

Unless explicitly instructed, do not write code comments. Use names, types and structure to convey purpose. Do not use comments to justify decisions or respond to feedback.
