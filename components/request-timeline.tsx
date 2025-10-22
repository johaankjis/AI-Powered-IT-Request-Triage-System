import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, MessageSquare, UserPlus } from "lucide-react"

const events = [
  {
    type: "created",
    title: "Request Created",
    description: "Request submitted by user@company.com",
    timestamp: "2025-01-20T10:30:00Z",
    icon: Clock,
  },
  {
    type: "classified",
    title: "AI Classification Complete",
    description: "Classified as Network issue with High priority (95% confidence)",
    timestamp: "2025-01-20T10:30:15Z",
    icon: CheckCircle2,
  },
  {
    type: "assigned",
    title: "Assigned to John Smith",
    description: "Automatically routed to Network Operations team",
    timestamp: "2025-01-20T10:31:00Z",
    icon: UserPlus,
  },
  {
    type: "comment",
    title: "Comment Added",
    description: "John: Investigating VPN server logs. Will update shortly.",
    timestamp: "2025-01-20T10:45:00Z",
    icon: MessageSquare,
  },
]

export function RequestTimeline({ requestId }: { requestId: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {events.map((event, index) => {
            const Icon = event.icon
            return (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-4 text-primary" />
                  </div>
                  {index < events.length - 1 && <div className="w-px h-full bg-border mt-2" />}
                </div>
                <div className="flex-1 pb-6">
                  <p className="font-medium text-sm">{event.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">{new Date(event.timestamp).toLocaleString()}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
