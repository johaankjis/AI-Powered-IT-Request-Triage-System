"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const stageData = [
  {
    stage: "Submitted",
    count: 15,
    requests: [
      { id: "REQ-1250", title: "New laptop request", category: "Hardware", time: "5 min ago" },
      { id: "REQ-1249", title: "VPN access needed", category: "Access", time: "12 min ago" },
      { id: "REQ-1248", title: "Install Slack", category: "Software", time: "18 min ago" },
    ],
  },
  {
    stage: "In Review",
    count: 12,
    requests: [
      { id: "REQ-1247", title: "SharePoint access", category: "Access", time: "1 hour ago" },
      { id: "REQ-1246", title: "Monitor replacement", category: "Hardware", time: "2 hours ago" },
    ],
  },
  {
    stage: "Approved",
    count: 8,
    requests: [
      { id: "REQ-1245", title: "Adobe license", category: "Software", time: "3 hours ago" },
      { id: "REQ-1244", title: "Network troubleshooting", category: "Network", time: "4 hours ago" },
    ],
  },
  {
    stage: "In Progress",
    count: 18,
    requests: [
      { id: "REQ-1243", title: "Laptop setup", category: "Hardware", time: "5 hours ago" },
      { id: "REQ-1242", title: "Database access", category: "Access", time: "6 hours ago" },
      { id: "REQ-1241", title: "WiFi issues", category: "Network", time: "7 hours ago" },
    ],
  },
  {
    stage: "Completed",
    count: 28,
    requests: [
      { id: "REQ-1240", title: "Password reset", category: "Access", time: "8 hours ago" },
      { id: "REQ-1239", title: "Printer setup", category: "Hardware", time: "9 hours ago" },
    ],
  },
]

const categoryColors: Record<string, string> = {
  Hardware: "bg-chart-1",
  Software: "bg-chart-2",
  Network: "bg-chart-3",
  Access: "bg-chart-4",
  Security: "bg-chart-5",
}

export function WorkflowStages() {
  const totalRequests = stageData.reduce((sum, stage) => sum + stage.count, 0)

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {stageData.map((stage) => {
        const percentage = (stage.count / totalRequests) * 100

        return (
          <Card key={stage.stage}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{stage.stage}</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {stage.count}
                </Badge>
              </div>
              <CardDescription className="text-xs">
                <Progress value={percentage} className="h-1 mt-2" />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {stage.requests.map((request) => (
                <div
                  key={request.id}
                  className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">{request.id}</span>
                    <div
                      className={`size-2 rounded-full ${categoryColors[request.category] || "bg-muted"}`}
                      title={request.category}
                    />
                  </div>
                  <p className="text-sm font-medium leading-tight line-clamp-2">{request.title}</p>
                  <p className="text-xs text-muted-foreground">{request.time}</p>
                </div>
              ))}
              {stage.count > stage.requests.length && (
                <p className="text-xs text-center text-muted-foreground py-2">
                  +{stage.count - stage.requests.length} more
                </p>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
