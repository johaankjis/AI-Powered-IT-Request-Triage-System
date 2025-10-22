# AI-Powered IT Request Triage System

## Overview
The AI-Powered IT Request Triage System is a Next.js application that demonstrates an analytics-first workflow for managing IT support queues. It ships with a responsive dashboard, intelligent request management surfaces, and workflow insights that highlight how triage data flows through the system.

## Key Features
- **Executive analytics dashboard** – Landing dashboard surfaces KPI tiles, request volume trends, SLA compliance, category distribution, and a curated list of active tickets for at-a-glance monitoring.
- **Request operations workspace** – Dedicated requests area supports filtering and tabular review with relative timestamps, chip-based status/priority indicators, and deep links into per-request detail views.
- **AI-assisted submission flow** – Submission form invokes the `/api/classify` endpoint to auto-detect category, priority, and routing suggestions before handing off to the mocked persistence API.
- **Workflow intelligence** – Workflow hub combines KPI cards, activity summaries, stage breakdowns, and visual progress indicators to expose bottlenecks and throughput trends.
- **Mocked API layer** – `/api/requests` exposes seeded data and simulates POST handling, enabling UI development without a backing database.

## Tech Stack
- **Framework:** Next.js App Router with React 19.
- **Styling:** Tailwind CSS with utility helpers (`clsx`, `tailwind-merge`) and shadcn-inspired component primitives.
- **Charts & Visualization:** Recharts integrated through reusable chart container helpers.
- **Forms & Validation:** Custom React hooks with progressive enhancement; Zod-backed AI classification schema ensures typed responses.

## Project Structure
- `app/` – App Router pages, layouts, global styles, and API route handlers for classification and request data.
- `components/` – Feature and UI components including dashboards, workflows, tables, and the shadcn-based `ui/` library.
- `hooks/` – Shared React hooks such as responsive helpers and toast integration.
- `lib/` – Utility helpers for styling composition and other shared logic.
- `public/` – Static assets served by Next.js.
- `styles/` – Tailwind entry points and reusable global styles.

## Getting Started
1. **Install dependencies** (project uses `pnpm` by default):
   ```bash
   pnpm install
   ```
2. **Run the development server**:
   ```bash
   pnpm dev
   ```
   Visit `http://localhost:3000` to explore the dashboard.
3. **Lint the project**:
   ```bash
   pnpm lint
   ```
4. **Create a production build**:
   ```bash
   pnpm build
   ```

## Environment Variables
The AI classification endpoint relies on the [Vercel AI SDK](https://sdk.vercel.ai). Provide a compatible API key (for example `AI_API_KEY` or `OPENAI_API_KEY`) so the `/api/classify` route can call `openai/gpt-4o-mini` successfully.

## Extending the Prototype
- Replace the mocked data in `app/api/requests/route.ts` with persistent storage or a ticketing integration when ready.
- Connect `components/request-details.tsx` and related workflow cards to real-time data to reflect live updates.
- Update chart datasets to pull from analytics services or warehouses for production-grade insights.
