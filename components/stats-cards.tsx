import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Clock, CheckCircle2, AlertCircle } from "lucide-react"

const stats = [
  {
    label: "Total Requests",
    value: "1,247",
    change: "+12.5%",
    trend: "up",
    icon: CheckCircle2,
  },
  {
    label: "SLA Compliance",
    value: "94.2%",
    change: "+5.3%",
    trend: "up",
    icon: Clock,
  },
  {
    label: "Avg Resolution Time",
    value: "2.4h",
    change: "-18.2%",
    trend: "down",
    icon: TrendingDown,
  },
  {
    label: "Open Requests",
    value: "87",
    change: "-8.1%",
    trend: "down",
    icon: AlertCircle,
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        const isPositive = stat.trend === "up"

        return (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                <Icon className="size-4 text-muted-foreground" />
              </div>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    isPositive ? "text-chart-3" : "text-chart-1"
                  }`}
                >
                  {isPositive ? <TrendingUp className="size-4" /> : <TrendingDown className="size-4" />}
                  <span>{stat.change}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
