import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"
import { RequestVolumeChart } from "@/components/request-volume-chart"
import { SLAComplianceChart } from "@/components/sla-compliance-chart"
import { CategoryDistribution } from "@/components/category-distribution"
import { RecentRequests } from "@/components/recent-requests"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-balance">IT Request Analytics</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Monitor request volume, SLA compliance, and resolution trends in real-time
          </p>
        </div>

        <StatsCards />

        <div className="grid gap-6 lg:grid-cols-2">
          <RequestVolumeChart />
          <SLAComplianceChart />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentRequests />
          </div>
          <CategoryDistribution />
        </div>
      </main>
    </div>
  )
}
