import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Calendar, Tag } from "lucide-react"

export function RequestDetails({ requestId }: { requestId: string }) {
  // Mock data - in real app, fetch from API
  const request = {
    id: requestId,
    title: "Laptop not connecting to VPN",
    description:
      "I'm unable to connect to the company VPN from my home network. I've tried restarting my laptop and router, but the issue persists. The VPN client shows 'Connection timeout' error after attempting to connect for about 30 seconds.",
    category: "Network",
    priority: "High",
    status: "In Progress",
    assignee: "John Smith",
    email: "user@company.com",
    createdAt: "2025-01-20T10:30:00Z",
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-sm text-muted-foreground">{request.id}</span>
              <Badge variant="outline">{request.category}</Badge>
              <Badge className="bg-destructive/80 text-destructive-foreground">{request.priority}</Badge>
              <Badge className="bg-chart-2 text-white">{request.status}</Badge>
            </div>
            <CardTitle className="text-2xl">{request.title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2 text-sm">Description</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{request.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3">
            <User className="size-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Assigned To</p>
              <p className="text-sm font-medium">{request.assignee}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="size-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Requester</p>
              <p className="text-sm font-medium">{request.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="size-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Created</p>
              <p className="text-sm font-medium">{new Date(request.createdAt).toLocaleString()}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Tag className="size-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Category</p>
              <p className="text-sm font-medium">{request.category}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
