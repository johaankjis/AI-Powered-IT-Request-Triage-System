"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, MessageSquare, Clock } from "lucide-react"
import Link from "next/link"

interface Request {
  id: string
  title: string
  description: string
  category: string
  priority: string
  status: string
  assignee: string
  email: string
  createdAt: string
}

const priorityColors = {
  Critical: "bg-destructive text-destructive-foreground",
  High: "bg-destructive/80 text-destructive-foreground",
  Medium: "bg-accent text-accent-foreground",
  Low: "bg-secondary text-secondary-foreground",
}

const statusColors = {
  "In Progress": "bg-chart-2 text-white",
  "Pending Approval": "bg-chart-4 text-white",
  Assigned: "bg-chart-1 text-white",
  Resolved: "bg-chart-3 text-white",
  Open: "bg-muted text-muted-foreground",
}

export function RequestsTable() {
  const [requests, setRequests] = useState<Request[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRequests() {
      try {
        const response = await fetch("/api/requests")
        const data = await response.json()
        setRequests(data)
      } catch (error) {
        console.error("[v0] Failed to fetch requests:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRequests()
  }, [])

  if (loading) {
    return (
      <Card>
        <CardContent className="p-8 text-center text-muted-foreground">Loading requests...</CardContent>
      </Card>
    )
  }

  if (requests.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center text-muted-foreground">No requests found</CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">Request ID</th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">Title</th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">Category</th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">Priority</th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">Status</th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">Assignee</th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">Created</th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => {
                const timeAgo = getTimeAgo(new Date(request.createdAt))

                return (
                  <tr key={request.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <span className="font-mono text-sm">{request.id}</span>
                    </td>
                    <td className="p-4">
                      <div className="max-w-xs">
                        <p className="font-medium text-sm truncate">{request.title}</p>
                        <p className="text-xs text-muted-foreground truncate">{request.description}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" className="text-xs">
                        {request.category}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={`text-xs ${priorityColors[request.priority as keyof typeof priorityColors]}`}>
                        {request.priority}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={`text-xs ${statusColors[request.status as keyof typeof statusColors]}`}>
                        {request.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="text-sm">{request.assignee}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="size-3" />
                        {timeAgo}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Link href={`/requests/${request.id}`}>
                          <Button variant="ghost" size="icon" className="size-8">
                            <Eye className="size-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="size-8">
                          <MessageSquare className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

function getTimeAgo(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 60) return `${diffMins} min ago`
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`
  return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`
}
