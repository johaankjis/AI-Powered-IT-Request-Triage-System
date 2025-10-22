import { DashboardHeader } from "@/components/dashboard-header"
import { WorkflowOverview } from "@/components/workflow-overview"
import { WorkflowStages } from "@/components/workflow-stages"
import { WorkflowMetrics } from "@/components/workflow-metrics"

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-balance">Workflow Status Tracking</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Monitor request progression through automated workflow stages
          </p>
        </div>

        <WorkflowMetrics />

        <WorkflowOverview />

        <WorkflowStages />
      </main>
    </div>
  )
}
