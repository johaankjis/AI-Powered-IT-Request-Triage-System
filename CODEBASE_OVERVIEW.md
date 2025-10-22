# AI-Powered IT Request Triage System Codebase Overview

This document gives a high-level tour of the project structure, runtime flow, and notable implementation details for the AI-Powered IT Request Triage System. Use it as a companion to the main README when exploring or extending the codebase.

## Architecture at a Glance

- **Framework:** [Next.js](https://nextjs.org/) App Router targeting React 19 with TypeScript for static typing.
- **Rendering Model:** Uses server components by default with `"use client"` opt-ins for interactive areas (forms, charts, tables).
- **Styling:** Tailwind CSS utilities augmented with shadcn-inspired primitives under `components/ui/` and helper utilities such as `lib/utils.ts`.
- **Data Layer:** Mocked API routes under `app/api/` provide request data and AI-driven classification. Client components call these endpoints via the native `fetch` API.
- **Visualization:** Recharts-backed chart primitives expose reusable request-volume, SLA compliance, and category distribution widgets.

## Directory Map

| Path | Purpose |
| --- | --- |
| `app/` | App Router entry points, layouts, route handlers, and global CSS. Each folder under `app/` maps to a route (e.g., `/requests`, `/workflows`). |
| `components/` | Feature-specific React components (tables, dashboards, workflows) composed from the design system. |
| `components/ui/` | Shadcn-style UI primitives (cards, forms, tables, charts, overlays) used across the feature components. |
| `hooks/` | Shared React hooks for responsive state and toast management. |
| `lib/` | Utility helpers, currently featuring the Tailwind `cn` class merger. |
| `public/` | Static assets served by Next.js. |
| `styles/` | Tailwind entry points and project-wide CSS variables. |

## Route Surfaces

- `app/page.tsx` implements the **executive dashboard** with KPI cards, trend charts, and a recent-requests feed assembled from `StatsCards`, `RequestVolumeChart`, `SLAComplianceChart`, and `CategoryDistribution` components.
- `app/requests/page.tsx` powers the **request operations workspace**, combining `RequestFilters` with the asynchronous `RequestsTable` to explore mocked ticket data from `/api/requests`.
- `app/submit/page.tsx` renders the **AI-assisted submission flow**. The `RequestForm` component performs live classification via `/api/classify`, streams the results to the UI, and posts successful submissions back to `/api/requests`.
- `app/workflows/page.tsx` exposes **workflow insights**, orchestrating `WorkflowMetrics`, `WorkflowOverview`, and `WorkflowStages` to visualize pipeline health.
- `app/analytics/page.tsx` extends analytics coverage with chart cards, category breakdowns, and placeholder sections that can be wired to additional datasets.

Every top-level page wraps content in the shared `DashboardHeader`, delivering consistent navigation, CTA entry points, and layout spacing.

## API Routes

| Route | Handler | Notes |
| --- | --- | --- |
| `POST /api/classify` | `app/api/classify/route.ts` | Calls `generateObject` with a Zod schema to coerce GPT-generated classification output into structured category, priority, routing, confidence, and reasoning fields. |
| `GET /api/requests` | `app/api/requests/route.ts` | Returns seeded request records with timestamps, metadata, and status for dashboard/table consumption. |
| `POST /api/requests` | `app/api/requests/route.ts` | Simulates persistence for submitted requests and responds with a generated `REQ-XXXX` identifier after a short artificial delay. |

These mocked routes encapsulate data access so UI components interact with a consistent interface that can later be swapped for real services or databases.

## Key Components and Hooks

- **Forms & Submission** – `components/request-form.tsx` contains the AI-assisted submission workflow, including optimistic UI states for classification (`isClassifying`) and submission (`isSubmitting`).
- **Data Visualization** – `components/request-volume-chart.tsx`, `components/sla-compliance-chart.tsx`, and `components/category-distribution.tsx` wrap chart primitives with responsive containers and curated datasets.
- **Requests Management** – `components/request-filters.tsx` and `components/requests-table.tsx` coordinate filter controls, table rendering, and request metadata formatting for the operations page.
- **Workflow Intelligence** – Components under `components/workflow-*.tsx` display stage-by-stage breakdowns, activity timelines, and summarized metrics for monitoring throughput.
- **UI Primitives** – The `components/ui/` directory hosts reusable building blocks (buttons, cards, dialogs, charts, tables, etc.) generated from shadcn patterns and tailored to the project’s design tokens.
- **Shared Hooks** – `hooks/use-mobile.ts` exposes responsive breakpoint detection, while `hooks/use-toast.ts` integrates toast notifications with the shared toaster UI.

## Styling & Theming

Tailwind CSS drives layout and spacing with theme tokens configured in `tailwind.config.ts` and consumed through utility classes. The `ThemeProvider` component enables light/dark theming and integrates with Next.js for consistent hydration between server and client renders.

## Development Workflow

- **Install dependencies** with `pnpm install` (or `npm install`/`yarn install` if you prefer a different package manager).
- **Run the dev server** using `pnpm dev`, then open `http://localhost:3000` to explore the dashboard.
- **Lint the project** via `pnpm lint` to maintain code quality.
- **Create a production build** with `pnpm build`; deploy the generated output to a Next.js-compatible hosting provider.

## Extending the System

- Replace the mocked `/api/requests` handlers with real persistence (e.g., database access or ticketing integrations) to persist submissions and power live tables.
- Wire the chart components to analytics services or a data warehouse to replace the stubbed datasets with real metrics.
- Expand the AI classification schema to incorporate SLA predictions, routing explanations, or follow-up recommendations as your workflows mature.
- Leverage the existing UI primitive library to add new dashboard cards, filters, or workflow stages without rebuilding base components.

For deeper dives into specific modules, review the corresponding files referenced above or consult inline comments throughout the component implementations.
