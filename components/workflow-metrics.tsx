import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Clock, CheckCircle2, AlertTriangle } from "lucide-react"

const metrics = [
  {
    label: "Active Workflows",
    value: "42",
    change: "+8 today",
    icon: TrendingUp,
    color: "text-chart-1",
  },
  {
    label: "Avg Processing Time",
    value: "3.2h",
    change: "-12% this week",
    icon: Clock,
    color: "text-chart-2",
  },
  {
    label: "Completed Today",
    value: "28",
    change: "+15% vs yesterday",
    icon: CheckCircle2,
    color: "text-chart-3",
  },
  {
    label: "Blocked Requests",
    value: "5",
    change: "Needs attention",
    icon: AlertTriangle,
    color: "text-destructive",
  },
]

export function WorkflowMetrics() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
                <Icon className={`size-4 ${metric.color}`} />
              </div>
              <div className="space-y-1">
                <span className="text-3xl font-bold tracking-tight">{metric.value}</span>
                <p className="text-xs text-muted-foreground">{metric.change}</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
