"use client";

import * as React from "react";
import { Label as LabelRechart, Pie, PieChart } from "recharts";
import Image from "next/image";
import Nodata from "@/assets/nodata.svg";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

interface CustomPieChartProps<T> {
  data: T[];
  loading?: boolean;
  conf: any;
  dataKey: string;
  nameKey: string;
  emptyTitle: string;
  emptySubtitle: string;
  unit: string;
}

const CustomPieChart = <T extends Record<string, any>>({
  data,
  loading,
  conf,
  dataKey,
  nameKey,
  emptyTitle,
  emptySubtitle,
  unit,
}: CustomPieChartProps<T>) => {
  const values: number[] = data.map((item) => item[dataKey]);

  // Calculer la somme des valeurs
  const total = values.reduce((acc, num) => acc + num, 0);

  return loading ? (
    <>
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
    </>
  ) : data && data.length > 0 ? (
    <ChartContainer
      config={conf}
      className="mx-auto aspect-square max-h-[450px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          paddingAngle={2}
          innerRadius={"40%"}
          cornerRadius={8}
          startAngle={90}
          endAngle={90 + 360}
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
                      {unit}
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
              nameKey={nameKey}
              customLegend
              customUnit={unit}
            />
          }
          className="flex-col items-start gap-1"
        />
      </PieChart>
    </ChartContainer>
  ) : (
    <div className="flex flex-col space-y-4 text-center">
      <div className="self-center">
        <Image priority src={Nodata} alt="Pas de données" />
      </div>
      <Label>{emptyTitle}</Label>
      <Label size={"small"}>{emptySubtitle}</Label>
    </div>
  );
};

export default CustomPieChart;
