# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.1.0 application using the App Router architecture, bootstrapped with `create-next-app`. The project is configured with TypeScript, Tailwind CSS v4, and ESLint.

## Documentation-First Development

**CRITICAL**: Before generating any code, Claude Code MUST ALWAYS refer to the relevant documentation files within the `/docs` directory. These files contain essential guidelines, patterns, best practices, and technical specifications that should inform all code generation.

- Check for relevant documentation files before implementing features
- Follow patterns and conventions documented in `/docs`
- Consult API documentation, architectural decisions, and coding standards from the docs
- If documentation is missing or unclear, ask the user for clarification

- docs/ui.md

## Development Commands

### Running the Application
```bash
npm run dev          # Start development server at http://localhost:3000
npm run build        # Create production build
npm start            # Start production server
```

### Code Quality
```bash
npm run lint         # Run ESLint on the codebase
```

## Architecture

### App Router Structure
- **Entry Point**: `app/layout.tsx` - Root layout component with Geist fonts configured
- **Home Page**: `app/page.tsx` - Main landing page
- **Styling**: `app/globals.css` - Global styles with Tailwind CSS utilities

The project uses Next.js App Router (not Pages Router), meaning:
- All routes are defined in the `app/` directory
- Server Components are the default
- File-based routing with `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` conventions
- Route handlers go in `route.ts` files

### TypeScript Configuration
- Path aliases configured: `@/*` maps to the root directory
- Strict mode enabled
- Target: ES2017
- JSX runtime: `react-jsx`

### Styling with Tailwind CSS v4
- Uses `@tailwindcss/postcss` plugin
- PostCSS configuration in `postcss.config.mjs`
- Dark mode support using the `dark:` prefix (class-based)

### Font Configuration
The project uses Next.js font optimization with:
- Geist Sans (variable: `--font-geist-sans`)
- Geist Mono (variable: `--font-geist-mono`)

Both fonts are loaded from Google Fonts with Latin subset only.

## Key Dependencies

- **next**: 16.1.0 (React framework)
- **react**: 19.2.3
- **tailwindcss**: ^4 (CSS framework)
- **typescript**: ^5 (Type checking)

## Important Notes

- This is a fresh project with minimal configuration
- No custom Next.js config options are currently set
- ESLint is configured with Next.js recommended rules for web vitals and TypeScript
- The project uses npm as the package manager (evidenced by `package-lock.json`)
