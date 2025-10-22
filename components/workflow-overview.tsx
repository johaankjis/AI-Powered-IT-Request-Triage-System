"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const workflows = [
  {
    id: "WF-001",
    name: "Hardware Request Workflow",
    category: "Hardware",
    activeRequests: 12,
    stages: ["Submitted", "Approved", "Ordered", "Delivered", "Installed"],
    avgTime: "4.5 days",
    status: "active",
  },
  {
    id: "WF-002",
    name: "Access Request Workflow",
    category: "Access",
    activeRequests: 18,
    stages: ["Submitted", "Manager Approval", "Security Review", "Provisioned"],
    avgTime: "2.1 hours",
    status: "active",
  },
  {
    id: "WF-003",
    name: "Software Installation Workflow",
    category: "Software",
    activeRequests: 8,
    stages: ["Submitted", "License Check", "Scheduled", "Installed", "Verified"],
    avgTime: "1.8 days",
    status: "active",
  },
  {
    id: "WF-004",
    name: "Network Issue Workflow",
    category: "Network",
    activeRequests: 4,
    stages: ["Submitted", "Diagnosed", "Escalated", "Resolved", "Verified"],
    avgTime: "3.2 hours",
    status: "active",
  },
]

export function WorkflowOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Workflows</CardTitle>
        <CardDescription>Automated workflows for different request categories</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {workflows.map((workflow) => (
            <div
              key={workflow.id}
              className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs text-muted-foreground">{workflow.id}</span>
                    <Badge variant="outline" className="text-xs">
                      {workflow.category}
                    </Badge>
                    <Badge className="text-xs bg-chart-1 text-white">{workflow.activeRequests} active</Badge>
                  </div>
                  <h3 className="font-semibold">{workflow.name}</h3>
                  <p className="text-sm text-muted-foreground">Avg completion: {workflow.avgTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {workflow.stages.map((stage, index) => (
                  <div key={stage} className="flex items-center gap-2 shrink-0">
                    <div className="px-3 py-1.5 rounded-md bg-muted text-xs font-medium whitespace-nowrap">{stage}</div>
                    {index < workflow.stages.length - 1 && <ArrowRight className="size-4 text-muted-foreground" />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
