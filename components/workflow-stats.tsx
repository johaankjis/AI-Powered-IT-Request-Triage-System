import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Clock, AlertTriangle, Zap } from "lucide-react"

const stats = [
  {
    label: "Active Workflows",
    value: "42",
    icon: Zap,
    color: "text-chart-1",
  },
  {
    label: "Pending Approvals",
    value: "18",
    icon: Clock,
    color: "text-chart-4",
  },
  {
    label: "Completed Today",
    value: "127",
    icon: CheckCircle2,
    color: "text-chart-3",
  },
  {
    label: "Escalations",
    value: "5",
    icon: AlertTriangle,
    color: "text-destructive",
  },
]

export function WorkflowStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon

        return (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                <Icon className={`size-5 ${stat.color}`} />
              </div>
              <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
