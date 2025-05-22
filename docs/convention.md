# LinkInNest Development Conventions

## Table of Contents

- [Project Structure](#project-structure)
- [Folder Structure](#folder-structure)
- [Naming Conventions](#naming-conventions)
- [Coding Style](#coding-style)
- [Component Structure](#component-structure)
- [Styling Guide](#styling-guide)
- [State Management](#state-management)
- [API Rules](#api-rules)
- [Type Definitions](#type-definitions)
- [Git Conventions](#git-conventions)

## Project Structure

LinkInNest is based on Next.js App Router and uses a page-isolated structure with domain-centric reusable components.

### Core Principles

- **Page Isolation**: Each page has an independent folder structure
- **No Props Drilling**: All components directly call Containers
- **Domain-Centric Separation**: Reusable components separated by UI/domain
- **Logic-UI Separation**: Business logic managed through Containers and Hooks

### Overall Structure

```
app/                          # Next.js App Router pages
├── login/
│   ├── page.tsx             # Login page
│   ├── components/          # Page-specific components
│   │   ├── LoginLeft.tsx
│   │   └── LoginRight.tsx
│   └── logics/              # Page-specific logic
│       ├── LoginContainer.ts # unstated-next Container
│       └── useUsers.ts      # Separated hooks (when needed)
├── dashboard/
│   ├── page.tsx
│   ├── components/
│   └── logics/
└── ...

common/                       # Reusable components/hooks
├── ui/                      # Generic UI components/hooks
│   ├── Button.tsx
│   ├── Modal.tsx
│   ├── Input.tsx
│   ├── useModal.ts          # UI-related hooks
│   └── useToast.ts
└── domains/                 # Domain-specific reusable components/hooks
    ├── folders/
    │   ├── FolderCard.tsx
    │   ├── FolderTree.tsx
    │   └── useFolders.ts    # Folder-related business logic
    ├── auth/
    │   ├── AuthModal.tsx
    │   ├── useAuth.ts
    │   └── useLogin.ts
    ├── links/
    │   ├── LinkCard.tsx
    │   └── useLinks.ts
    └── tags/
        ├── TagSelector.tsx
        └── useTags.ts

lib/                         # External library configurations
├── supabase.ts
└── ...

types/                       # Type definitions
├── database.types.ts
└── index.ts
```

## Folder Structure

TODO: Explain roles and structure of each folder

## Naming Conventions

TODO: Rules for file names, variable names, function names

## Coding Style

TODO: ESLint, Prettier settings and rules

## Component Structure

TODO: Component writing rules

## Styling Guide

TODO: Tailwind CSS usage rules

## State Management

TODO: unstated-next usage rules

## API Rules

TODO: Supabase query writing rules

## Type Definitions

TODO: TypeScript type writing rules

## Git Conventions

TODO: Branch and commit message rules
