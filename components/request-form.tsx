"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Loader2, Sparkles, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function RequestForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isClassifying, setIsClassifying] = useState(false)
  const [classification, setClassification] = useState<{
    category: string
    priority: string
    suggestedTeam: string
    confidence: number
  } | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    email: "",
  })

  const handleDescriptionChange = async (description: string) => {
    setFormData({ ...formData, description })

    // Trigger AI classification when description is substantial
    if (description.length > 50 && formData.title.length > 5) {
      setIsClassifying(true)
      try {
        const response = await fetch("/api/classify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: formData.title,
            description,
          }),
        })
        const data = await response.json()
        setClassification(data)
      } catch (error) {
        console.error("[v0] Classification error:", error)
      } finally {
        setIsClassifying(false)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          classification,
        }),
      })

      if (response.ok) {
        router.push("/requests?success=true")
      }
    } catch (error) {
      console.error("[v0] Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Request Details</CardTitle>
          <CardDescription>Provide information about your IT support request</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Your Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Request Title</Label>
            <Input
              id="title"
              placeholder="Brief summary of your issue"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide detailed information about your issue, including any error messages or steps to reproduce..."
              value={formData.description}
              onChange={(e) => handleDescriptionChange(e.target.value)}
              rows={6}
              required
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Our AI will analyze your description to automatically classify and route your request
            </p>
          </div>
        </CardContent>
      </Card>

      {isClassifying && (
        <Card className="border-accent">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Loader2 className="size-5 animate-spin text-accent" />
              <div>
                <p className="font-medium text-sm">AI Classification in Progress</p>
                <p className="text-xs text-muted-foreground">Analyzing your request...</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {classification && !isClassifying && (
        <Card className="border-chart-3 bg-chart-3/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="size-5 text-chart-3" />
              <CardTitle className="text-lg">AI Classification Results</CardTitle>
            </div>
            <CardDescription>Automatically detected based on your description</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Category</p>
                <Badge variant="outline" className="font-medium">
                  {classification.category}
                </Badge>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Priority</p>
                <Badge variant="outline" className="font-medium">
                  {classification.priority}
                </Badge>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Suggested Team</p>
                <Badge variant="outline" className="font-medium">
                  {classification.suggestedTeam}
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="size-4 text-chart-3" />
              <span className="text-muted-foreground">
                Confidence: <span className="font-medium text-foreground">{classification.confidence}%</span>
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex gap-3">
        <Button type="button" variant="outline" onClick={() => router.back()} className="flex-1">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting} className="flex-1 gap-2">
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Request"
          )}
        </Button>
      </div>
    </form>
  )
}
