"use client"

import * as React from "react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
} from "@/components/ui/chart"

const chartData = [
  { status: "pending", tasks: 8, fill: "#4CAF50" },  
  { status: "done", tasks: 3, fill: "#1B5E20" },     
]

const chartConfig = {
  tasks: {
    label: "Tasks",
  },
  pending: {
    label: "Pending",
    color: "#4CAF50",
  },
  done: {
    label: "Done",
    color: "#1B5E20",
  },
}

export function ChartComponent() {
  const totalTasks = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.tasks, 0)
  }, [])

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="space-y-0 pb-2">
        <CardTitle className="text-lg">Today Tasks</CardTitle>
        <div className="text-3xl font-bold">{totalTasks}</div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[150px]"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="tasks"
              nameKey="status"
              innerRadius={40}
              outerRadius={60}
              strokeWidth={0}
            />
          </PieChart>
        </ChartContainer>
        <div className="mt-4 flex justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#4CAF50]" />
            <span className="text-sm">Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#1B5E20]" />
            <span className="text-sm">Done</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

