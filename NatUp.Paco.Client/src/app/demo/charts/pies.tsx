"use client";

import { Label } from "@/components/ui/label";
import * as React from "react";
import { Label as LabelRechart, Pie, PieChart } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import Nodata from "@/assets/nodata.svg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { contract: "LIDL", visitors: 22, fill: "#00677E" },
  {
    contract: "boeufMaine",
    visitors: 12,
    fill: "#95C413",
  },
  {
    contract: "labelRouge",
    visitors: 8,
    fill: "#14AFD1",
  },
];

const chartConfig = {
  boeufMaine: {
    label: "Boeuf fermier du maine",
  },
  labelRouge: {
    label: "Label rouge multiraces",
  },
  LIDL: {
    label: "LIDL",
  },
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Label de CHROME",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function Pies() {
  const total = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Pas de données</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 text-center">
            <div className="self-center">
              <Nodata className="w-64 h-48" />
            </div>
            <Label>Pas de contrat pour la récolte sélectionnée</Label>
            <Label size={"small"}>
              Sélectionnez une autre période pour avoir une vue des contrats
            </Label>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Chargement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-baseline space-x-2 pb-10">
            <Skeleton className="h-24 w-12" />
            <Skeleton className="h-40 w-12" />
            <Skeleton className="h-32 w-12" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-center space-x-2">
              <Skeleton className="h-4 w-4 rounded-md" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              <Skeleton className="h-4 w-4 rounded-md" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              <Skeleton className="h-4 w-4 rounded-md" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
      </Card>
      <Card>
        <CardHeader className="pb-0">
          <CardTitle>Exemple</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[450px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="contract"
                paddingAngle={2}
                innerRadius={"40%"}
                cornerRadius={8}
              >
                <LabelRechart
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {total.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            têtes
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
              <ChartLegend
                layout="vertical"
                content={
                  <ChartLegendContent
                    nameKey="contract"
                    customLegend
                    customUnit="têtes"
                  />
                }
                className="flex-col items-start gap-1"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
      </Card>
    </div>
  );
}
