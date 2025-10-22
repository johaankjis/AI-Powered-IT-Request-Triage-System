"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { category: "Hardware", value: 245, fill: "hsl(var(--chart-1))" },
  { category: "Software", value: 312, fill: "hsl(var(--chart-2))" },
  { category: "Network", value: 189, fill: "hsl(var(--chart-3))" },
  { category: "Access", value: 278, fill: "hsl(var(--chart-4))" },
  { category: "Security", value: 156, fill: "hsl(var(--chart-5))" },
]

const chartConfig = {
  value: {
    label: "Requests",
  },
}

export function CategoryDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Category Distribution</CardTitle>
        <CardDescription>Request breakdown by category</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={data}
              dataKey="value"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="mt-6 space-y-2">
          {data.map((item) => (
            <div key={item.category} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full" style={{ backgroundColor: item.fill }} />
                <span className="text-muted-foreground">{item.category}</span>
              </div>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
