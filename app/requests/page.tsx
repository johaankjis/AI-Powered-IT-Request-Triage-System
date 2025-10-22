import { DashboardHeader } from "@/components/dashboard-header"
import { RequestsTable } from "@/components/requests-table"
import { RequestFilters } from "@/components/request-filters"
import { Suspense } from "react"

export default function RequestsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-balance">Request Management</h1>
          <p className="text-muted-foreground mt-2 text-lg">View, filter, and manage all IT support requests</p>
        </div>

        <RequestFilters />

        <Suspense fallback={<div>Loading requests...</div>}>
          <RequestsTable />
        </Suspense>
      </main>
    </div>
  )
}
