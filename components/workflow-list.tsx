import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, XCircle, ArrowRight } from "lucide-react"

const workflows = [
  {
    id: "WF-1247",
    requestId: "REQ-1247",
    title: "VPN Connection Issue - Network Team",
    steps: [
      { name: "AI Classification", status: "completed", time: "2 min" },
      { name: "Auto-assign to Network Team", status: "completed", time: "1 min" },
      { name: "Technician Review", status: "in-progress", time: "In progress" },
      { name: "Resolution & Notification", status: "pending", time: "Pending" },
    ],
    sla: "1h 45m remaining",
  },
  {
    id: "WF-1246",
    requestId: "REQ-1246",
    title: "SharePoint Access Request - Approval Required",
    steps: [
      { name: "AI Classification", status: "completed", time: "1 min" },
      { name: "Manager Approval", status: "in-progress", time: "Awaiting approval" },
      { name: "Access Provisioning", status: "pending", time: "Pending" },
      { name: "Confirmation Email", status: "pending", time: "Pending" },
    ],
    sla: "3h 20m remaining",
  },
  {
    id: "WF-1245",
    requestId: "REQ-1245",
    title: "Software Installation - Adobe Suite",
    steps: [
      { name: "AI Classification", status: "completed", time: "2 min" },
      { name: "License Check", status: "completed", time: "5 min" },
      { name: "Installation Scheduled", status: "in-progress", time: "Scheduled for 2 PM" },
      { name: "Verification & Closure", status: "pending", time: "Pending" },
    ],
    sla: "1d 2h remaining",
  },
]

export function WorkflowList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Workflows</CardTitle>
        <CardDescription>Real-time workflow execution and status tracking</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {workflows.map((workflow) => (
          <div key={workflow.id} className="space-y-4 p-4 rounded-lg border border-border">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">{workflow.id}</span>
                  <ArrowRight className="size-3 text-muted-foreground" />
                  <span className="font-mono text-xs text-muted-foreground">{workflow.requestId}</span>
                </div>
                <h3 className="font-semibold">{workflow.title}</h3>
              </div>
              <Badge variant="outline" className="whitespace-nowrap">
                SLA: {workflow.sla}
              </Badge>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {workflow.steps.map((step, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    step.status === "completed"
                      ? "border-chart-3 bg-chart-3/10"
                      : step.status === "in-progress"
                        ? "border-chart-2 bg-chart-2/10"
                        : "border-border bg-muted/30"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-sm font-medium text-pretty">{step.name}</span>
                    {step.status === "completed" && <CheckCircle2 className="size-4 text-chart-3 flex-shrink-0" />}
                    {step.status === "in-progress" && <Clock className="size-4 text-chart-2 flex-shrink-0" />}
                    {step.status === "pending" && <XCircle className="size-4 text-muted-foreground flex-shrink-0" />}
                  </div>
                  <span className="text-xs text-muted-foreground">{step.time}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
