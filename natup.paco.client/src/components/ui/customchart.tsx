"use client";

import * as React from "react";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface CustomChartProps {
  data: any;
  loading?: boolean;
  conf: any;
}
import { Skeleton } from "@/components/ui/skeleton";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Label as LabelRecharts,
} from "recharts";

const CustomChart: React.FC<CustomChartProps> = ({ data, loading, conf }) => {
  // Obtenez les clés des données
  const dataKeys =
    data.length > 0 ? Object.keys(data[0]).filter((key) => key !== "type") : [];

  const testConfig = { conf } satisfies ChartConfig;

  const customizedGroupTick = (props: any) => {
    const { index, x, y, payload } = props;
    const current = data[index];
    const totalc = dataKeys.reduce((sum, key) => {
      const value = current[key];
      if (typeof value === "number") {
        return sum + value;
      }
      return sum;
    }, 0);

    const customLegend = (
      <div className="flex justify-between items-center gap-2">
        {/* Colonne TITRE */}
        <div className="flex items-center gap-2 w-3/4 ">
          <div className="flex justify-center h-[30px] w-[30px] ">
            <Icon
              iconName={conf[payload.value as keyof typeof conf]?.icon}
              round
              size={"small"}
              className={cn(
                conf[payload.value as keyof typeof conf]?.className
              )}
            ></Icon>
          </div>
          <span className="text-lg text-gray-700 font-bold">
            {conf[payload.value as keyof typeof conf]?.label}
          </span>
        </div>
        {/* Colonne TOTAL */}
        <div className="flex  justify-start w-1/4 pr-2 ">
          <div className="flex flex-col w-fit ">
            <span className="text-xs text-gray-500  w-fit">TOTAL</span>
            <span className="text-sm font-semibold text-gray-800  w-fit">
              {totalc.toLocaleString("fr-FR", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </div>
    );

    return (
      <>
        <g>
          <foreignObject
            x={x - 200}
            y={y - 21}
            width="240px"
            height="3.6em"
            className=""
          >
            {customLegend}
          </foreignObject>
        </g>
      </>
    );
  };

  return loading ? (
    // Skeleton en mode "loading"
    <>
      <div className="flex items-center space-x-4 mb-2">
        <div className="flex items-center space-x-2 w-1/4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-2 w-[40px]" />
        </div>
        <div className="flex items-center space-x-2 w-full">
          <div className="space-y-2">
            <Skeleton className="h-2 w-[80px]" />
            <Skeleton className="h-2 w-[60px]" />
          </div>
          <Skeleton className="h-6 w-[50%]" />
        </div>
      </div>
      <div className="flex items-center space-x-4 mb-2">
        <div className="flex items-center space-x-2 w-1/4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-2 w-[40px]" />
        </div>
        <div className="flex items-center space-x-2 w-full">
          <div className="space-y-2">
            <Skeleton className="h-2 w-[80px]" />
            <Skeleton className="h-2 w-[60px]" />
          </div>
          <Skeleton className="h-6 w-[50%]" />
        </div>
      </div>
      <div className="flex items-center space-x-4 mb-2">
        <div className="flex items-center space-x-2 w-1/4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-2 w-[40px]" />
        </div>
        <div className="flex items-center space-x-2 w-full">
          <div className="space-y-2">
            <Skeleton className="h-2 w-[80px]" />
            <Skeleton className="h-2 w-[60px]" />
          </div>
          <Skeleton className="h-6 w-[50%]" />
        </div>
      </div>
    </>
  ) : (
    <div>
      <ChartContainer
        config={conf}
        className="w-full"
        style={{ height: `${data.length * 60 + 62}px` }}
      >
        <BarChart
          layout="vertical"
          data={data}
          barSize={30}
          margin={{
            left: 200,
          }}
        >
          <CartesianGrid />

          {/* Vertical */}
          <XAxis
            type="number"
            tickLine={false}
            minTickGap={80}
            axisLine={false}
            scale="log"
            domain={[1, "auto"]}
            allowDataOverflow
          />
          <YAxis
            dataKey="type"
            type="category"
            tickLine={false}
            axisLine={false}
            tickMargin={40}
            tick={customizedGroupTick}
          />

          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <ChartLegend
            content={<ChartLegendContent />}
            align="right"
            verticalAlign="top"
            className="justify-end"
          />

          {dataKeys.map((key, index) => {
            const isFirst =
              index === 0 || (index > 0 && data[index - 1].key == 0);
            const isLast =
              index == dataKeys.length - 1 ||
              (index < dataKeys.length - 1 && data[index + 1].key == 0);

            return (
              <Bar
                key={index}
                dataKey={key}
                stackId="a"
                fill={`var(--color-${key})`}
                radius={
                  isFirst && isLast
                    ? [6, 6, 6, 6]
                    : isFirst
                    ? [6, 0, 0, 6]
                    : isLast
                    ? [0, 6, 6, 0]
                    : [0, 0, 0, 0]
                }
              >
                <LabelList
                  dataKey={key}
                  position="insideLeft"
                  offset={8}
                  className="fill-[white]"
                  fontSize={12}
                />
              </Bar>
            );
          })}

          <XAxis
            dataKey="type"
            tickFormatter={(value) =>
              testConfig[value as keyof typeof testConfig]?.label
            }
            tickLine={false}
            axisLine={false}
          />
          <YAxis tickLine tickMargin={20} axisLine={true} hide />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default CustomChart;
