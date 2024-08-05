"use client";

import * as React from "react";
import { scaleLog } from "d3-scale";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Label as LabelRecharts,
} from "recharts";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import Icon from "@/components/ui/icon";
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

type ChartDataItem = {
  type: string;
  "2021": number;
  "2022": number;
  "2023": number;
  [key: string]: number | string;
};

export default function Bars() {
  const chartData: ChartDataItem[] = [
    { type: "ble", "2021": 150, "2022": 312, "2023": 498 },
    { type: "orge", "2021": 245, "2022": 491, "2023": 499 },
    { type: "colza", "2021": 589, "2022": 301, "2023": 399 },
    { type: "pois", "2021": 224, "2022": 481, "2023": 499 },
    { type: "ble", "2021": 710, "2022": 312, "2023": 498 },
    { type: "orge", "2021": 245, "2022": 491, "2023": 499 },
    { type: "colza", "2021": 589, "2022": 301, "2023": 399 },
    { type: "pois", "2021": 224, "2022": 481, "2023": 499 },
  ];

  const chartConfig = {
    "2021": {
      color: "#95C413",
      label: "2021",
    },
    "2022": {
      color: "#14AFD1",
      label: "2022",
    },
    "2023": {
      color: "#00677E",
      label: "2023",
    },
    ble: {
      label: "Blé",
    },
    orge: {
      label: "Orge",
    },
    colza: {
      label: "Colza",
    },
    pois: {
      label: "Pois",
    },
  } satisfies ChartConfig;

  // Obtenez les clés des données
  const dataKeys = Object.keys(chartData[0]).filter((key) => key !== "type");

  const chart2Data = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 200, mobile: 20 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chart2Config = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="pb-0">
          <CardTitle>Prix moyen pondéré (€/T) </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer config={chartConfig} className="h-80 w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="type"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                scale="log"
                domain={["dataMin", "dataMax"]}
              />
              <ChartTooltip />

              {dataKeys.map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={`var(--color-${key})`}
                  radius={4}
                />
              ))}

              <ChartLegend
                verticalAlign="top"
                align="right"
                content={<ChartLegendContent />}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Prix moyen pondéré (€/T)</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chart2Config} className="h-[350px] w-full">
            <BarChart data={chart2Data} layout="horizontal">
              <CartesianGrid />
              <YAxis tickLine={false} axisLine={false} />
              <XAxis
                dataKey="month"
                tickMargin={10}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                stackId="a"
                dataKey="desktop"
                fill="#95C413"
                radius={[0, 0, 4, 4]}
              >
                <LabelList
                  dataKey="desktop"
                  position="insideLeft"
                  offset={8}
                  className="fill-[white]"
                  fontSize={12}
                />
              </Bar>
              <Bar
                stackId="a"
                dataKey="mobile"
                fill="#00677E"
                radius={[4, 4, 0, 0]}
              >
                <LabelList
                  dataKey="mobile"
                  position="insideLeft"
                  offset={8}
                  className="fill-[white]"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
