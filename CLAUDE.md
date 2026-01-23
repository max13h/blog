# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Maxime Hmae's personal blog built with Astro. The project is configured for deployment to GitHub Pages at `https://max13h.github.io/blog`.

## Development Commands

**Package Manager**: This project uses `pnpm` as its package manager (version 10.25.0+).

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Lint code
pnpm lint

# Format code
pnpm format
```

## Project Structure

- **`src/pages/`** - File-based routing. Each `.astro` file becomes a route
- **`src/layouts/`** - Shared layout components (e.g., `Layout.astro` for base HTML structure)
- **`src/components/`** - Reusable Astro components
- **`src/assets/`** - Static assets

## Code Style and Linting

### ESLint Configuration

- Uses flat config format (`eslint.config.mjs`)
- Supports `.astro`, `.ts`, `.js`, `.vue`, and `.md` files
- Code style rules:
  - No semicolons: `semi: ["error", "never"]`
  - Double quotes: `quotes: ["error", "double"]`
  - No console: `no-console: "error"`
- TypeScript files use recommended TypeScript ESLint rules
- Markdown files have line length rule disabled
- Reports unused disable directives as errors

### Prettier Configuration

- Plugins: `prettier-plugin-astro`, `prettier-plugin-vue`
- Code style:
  - No semicolons: `semi: false`
  - Double quotes: `singleQuote: false`
  - 2 spaces indentation: `tabWidth: 2`, `useTabs: false`
- Supports `.astro` and `.vue` files with proper parsers

**Important**: Run `pnpm lint` before committing to ensure code quality. Run `pnpm format` to auto-format code.

## Astro Configuration

- **Site URL**: `https://max13h.github.io`
- **Base path**: `/blog`
- **TypeScript**: Extends `astro/tsconfigs/strict`

All URLs and links should account for the `/blog` base path.

## Deployment

The project uses GitHub Actions for automated deployment to GitHub Pages:

- Workflow triggers on push to `main` branch or manual dispatch
- Uses the official `withastro/action@v5.1.0` for building
- Automatically detects pnpm from lockfile
- Deploys to GitHub Pages environment

## Key Files

- **`astro.config.mjs`** - Astro configuration (site URL, base path)
- **`eslint.config.mjs`** - ESLint flat config with Astro, TypeScript, Vue, and Markdown support
- **`.prettierrc.mjs`** - Prettier configuration with Astro plugin
- **`tsconfig.json`** - TypeScript configuration extending Astro strict config
- **`.github/workflows/deploy.yml`** - GitHub Actions deployment workflow
