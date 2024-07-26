"use client";

import * as React from "react";
import Icon from "@/components/ui/icon";

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
  // type ChartDataItem = {
  //   type: string;
  //   delivered: number;
  //   todeliver: number;

  //   [key: string]: number | string;
  // };

  // const chartData: ChartDataItem[] = [
  //   { type: "babylou", delivered: 0, todeliver: 228.85 },
  //   { type: "calantis", delivered: 27.04, todeliver: 19.3 },
  //   { type: "hansa", delivered: 27.04, todeliver: 19.3 },
  //   { type: "pablo", delivered: 27.04, todeliver: 19.3 },
  //   { type: "perline", delivered: 278.84, todeliver: 50 },
  // ];

  const oldConfig = {
    delivered: {
      color: "hsl(var(--chart-1))",
      label: "Livré",
    },
    todeliver: {
      color: "hsl(var(--chart-2))",
      label: "Reste à livrer",
    },
    babylou: {
      color: "#95C413",
      label: "Babyloulou",
    },
    calantis: {
      color: "#95C413",
      label: "Calantis",
    },
    hansa: {
      color: "#95C413",
      label: "Hansa",
    },
    pablo: {
      color: "#95C413",
      label: "Pablo",
    },
    perline: {
      color: "#95C413",
      label: "Perline",
    },
  };

  // Obtenez les clés des données
  const dataKeys =
    data.length > 0 ? Object.keys(data[0]).filter((key) => key !== "type") : [];

  const testConfig = { conf } satisfies ChartConfig;

  // console.log(testConfig);

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
        <div className="flex items-center gap-2 w-3/4">
          <Icon
            iconName={conf[payload.value as keyof typeof conf]?.icon}
            round
            className="text-yellow-600 bg-orange-200"
          ></Icon>
          <span className="text-xl text-gray-700 font-bold">
            {conf[payload.value as keyof typeof conf]?.label}
          </span>
        </div>
        {/* Colonne TOTAL */}
        <div className="flex  justify-start w-1/4 pr-2 ">
          <div className="flex flex-col w-fit ">
            <span className="text-xs text-gray-500  w-fit">TOTAL</span>
            <span className="text-sm font-semibold text-gray-800  w-fit">
              {totalc}
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
        config={oldConfig}
        className="w-full"
        style={{ height: `${data.length * 60 + 62}px` }}
      >
        <BarChart
          layout="vertical"
          data={data}
          //barCategoryGap={7}
          //barGap={8}
          barSize={30}
          margin={{
            left: 200,
          }}
        >
          <CartesianGrid />

          {/* Horizontal */}
          {/* <XAxis dataKey="type" tickLine axisLine />
              <YAxis tickLine axisLine /> */}

          {/* Vertical */}
          <XAxis
            type="number"
            tickLine={false}
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
            //tickFormatter={(value) => value}
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

          {dataKeys.map((key, index) => (
            <Bar
              key={index}
              dataKey={key}
              stackId="a"
              fill={`var(--color-${key})`}
              radius={[
                index > 0 ? 0 : 6,
                index == dataKeys.length - 1 ? 6 : 0,
                index == dataKeys.length - 1 ? 6 : 0,
                index > 0 ? 0 : 6,
              ]}
              className="h-4"
              // barSize={30}
            >
              <LabelList
                dataKey={key}
                position="insideLeft"
                offset={8}
                className="fill-[white]"
                fontSize={12}
              />
            </Bar>
          ))}

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
