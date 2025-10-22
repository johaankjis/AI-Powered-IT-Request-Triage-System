import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RequestVolumeChart } from "@/components/request-volume-chart"
import { SLAComplianceChart } from "@/components/sla-compliance-chart"
import { CategoryDistribution } from "@/components/category-distribution"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-balance">Advanced Analytics</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Deep insights into request patterns, team performance, and system efficiency
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <RequestVolumeChart />
          <SLAComplianceChart />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Resolution Time Trends</CardTitle>
                <CardDescription>Average time to resolve requests by category over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center text-muted-foreground">
                Chart placeholder - Add time series data
              </CardContent>
            </Card>
          </div>
          <CategoryDistribution />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
            <CardDescription>Request handling metrics by team member</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "John Smith", resolved: 45, avg: "2.1h", satisfaction: 4.8 },
                { name: "Sarah Johnson", resolved: 38, avg: "2.4h", satisfaction: 4.9 },
                { name: "Mike Chen", resolved: 42, avg: "1.9h", satisfaction: 4.7 },
                { name: "Emily Davis", resolved: 36, avg: "2.6h", satisfaction: 4.6 },
              ].map((member) => (
                <div
                  key={member.name}
                  className="flex items-center justify-between p-4 rounded-lg border border-border"
                >
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.resolved} resolved • {member.avg} avg time
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{member.satisfaction} / 5.0</p>
                    <p className="text-xs text-muted-foreground">Satisfaction</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
