"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { category: "Hardware", compliance: 96 },
  { category: "Software", compliance: 94 },
  { category: "Network", compliance: 92 },
  { category: "Access", compliance: 98 },
  { category: "Security", compliance: 91 },
]

const chartConfig = {
  compliance: {
    label: "SLA Compliance %",
    color: "hsl(var(--chart-2))",
  },
}

export function SLAComplianceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SLA Compliance by Category</CardTitle>
        <CardDescription>Percentage of requests resolved within SLA targets</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis dataKey="category" tickLine={false} axisLine={false} tickMargin={8} className="text-xs" />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} className="text-xs" domain={[0, 100]} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="compliance" fill="var(--color-compliance)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
