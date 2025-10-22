import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

const requests = [
  {
    id: "REQ-1247",
    title: "Laptop not connecting to VPN",
    category: "Network",
    priority: "High",
    status: "In Progress",
    assignee: "John Smith",
    time: "15 min ago",
  },
  {
    id: "REQ-1246",
    title: "Request access to SharePoint site",
    category: "Access",
    priority: "Medium",
    status: "Pending Approval",
    assignee: "Sarah Johnson",
    time: "1 hour ago",
  },
  {
    id: "REQ-1245",
    title: "Software installation - Adobe Creative Suite",
    category: "Software",
    priority: "Low",
    status: "Assigned",
    assignee: "Mike Chen",
    time: "2 hours ago",
  },
  {
    id: "REQ-1244",
    title: "Monitor display issues",
    category: "Hardware",
    priority: "Medium",
    status: "Resolved",
    assignee: "Emily Davis",
    time: "3 hours ago",
  },
  {
    id: "REQ-1243",
    title: "Security alert - suspicious email",
    category: "Security",
    priority: "High",
    status: "In Progress",
    assignee: "David Wilson",
    time: "4 hours ago",
  },
]

const priorityColors = {
  High: "bg-destructive text-destructive-foreground",
  Medium: "bg-accent text-accent-foreground",
  Low: "bg-secondary text-secondary-foreground",
}

const statusColors = {
  "In Progress": "bg-chart-2 text-white",
  "Pending Approval": "bg-chart-4 text-white",
  Assigned: "bg-chart-1 text-white",
  Resolved: "bg-chart-3 text-white",
}

export function RecentRequests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Requests</CardTitle>
        <CardDescription>Latest IT support requests and their status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs text-muted-foreground">{request.id}</span>
                  <Badge variant="outline" className="text-xs">
                    {request.category}
                  </Badge>
                  <Badge className={`text-xs ${priorityColors[request.priority as keyof typeof priorityColors]}`}>
                    {request.priority}
                  </Badge>
                </div>
                <h4 className="font-medium text-sm">{request.title}</h4>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>Assigned to {request.assignee}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" />
                    {request.time}
                  </span>
                </div>
              </div>
              <Badge
                className={`text-xs whitespace-nowrap ${statusColors[request.status as keyof typeof statusColors]}`}
              >
                {request.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
