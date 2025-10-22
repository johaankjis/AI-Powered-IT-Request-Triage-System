export async function POST(request: Request) {
  try {
    const data = await request.json()

    // In a real app, this would save to a database
    // For now, we'll simulate a successful submission
    console.log("[v0] New request submitted:", data)

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return Response.json({
      success: true,
      requestId: `REQ-${Math.floor(Math.random() * 10000)}`,
    })
  } catch (error) {
    console.error("[v0] Request submission error:", error)
    return Response.json({ error: "Submission failed" }, { status: 500 })
  }
}

export async function GET() {
  // Mock data for requests list
  const requests = [
    {
      id: "REQ-1247",
      title: "Laptop not connecting to VPN",
      description: "Unable to connect to company VPN from home network",
      category: "Network",
      priority: "High",
      status: "In Progress",
      assignee: "John Smith",
      email: "user@company.com",
      createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    },
    {
      id: "REQ-1246",
      title: "Request access to SharePoint site",
      description: "Need access to the Marketing SharePoint site for Q1 campaign",
      category: "Access",
      priority: "Medium",
      status: "Pending Approval",
      assignee: "Sarah Johnson",
      email: "user2@company.com",
      createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    },
    {
      id: "REQ-1245",
      title: "Software installation - Adobe Creative Suite",
      description: "Need Adobe Creative Suite installed for design work",
      category: "Software",
      priority: "Low",
      status: "Assigned",
      assignee: "Mike Chen",
      email: "designer@company.com",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
  ]

  return Response.json(requests)
}
