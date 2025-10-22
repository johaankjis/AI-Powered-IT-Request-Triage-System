import { generateObject } from "ai"
import { z } from "zod"

const classificationSchema = z.object({
  category: z.enum(["Hardware", "Software", "Network", "Access", "Security"]),
  priority: z.enum(["Low", "Medium", "High", "Critical"]),
  suggestedTeam: z.string(),
  confidence: z.number().min(0).max(100),
  reasoning: z.string(),
})

export async function POST(request: Request) {
  try {
    const { title, description } = await request.json()

    const { object } = await generateObject({
      model: "openai/gpt-4o-mini",
      schema: classificationSchema,
      prompt: `You are an IT support triage system. Analyze the following IT support request and classify it.

Title: ${title}
Description: ${description}

Classify this request into:
1. Category: Hardware, Software, Network, Access, or Security
2. Priority: Low, Medium, High, or Critical (based on business impact and urgency)
3. Suggested Team: The specific IT team that should handle this (e.g., "Desktop Support", "Network Operations", "Security Team", "Access Management", "Application Support")
4. Confidence: Your confidence level in this classification (0-100)
5. Reasoning: Brief explanation of your classification

Consider:
- Security issues should be high priority
- System outages affecting multiple users are critical
- Access requests are typically medium priority unless urgent
- Hardware issues depend on impact (broken mouse = low, server failure = critical)`,
    })

    return Response.json(object)
  } catch (error) {
    console.error("[v0] Classification error:", error)
    return Response.json({ error: "Classification failed" }, { status: 500 })
  }
}
