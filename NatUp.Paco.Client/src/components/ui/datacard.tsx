"use client";

import * as React from "react";
import { Info, Plus, icons } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

interface DataCardProps {
  title?: string;
  subtitle?: string;
  data?: number;
  type?: string;
  progress?: boolean;
  icon?: keyof typeof icons;
  tooltip?: string;
  loading?: boolean;
  empty?: boolean;
}

const DataCard: React.FC<DataCardProps> = ({
  title,
  data,
  type,
  progress,
  icon,
  subtitle,
  tooltip,
  loading,
  empty,
}) => {
  const IconComponent = icons[icon as keyof typeof icons];

  const isCurrency: boolean = type != undefined && type.indexOf("€") > -1;

  return empty ? (
    <div className="flex rounded-xl border border-dashed border-gray-300 text-gray-500 shadow-sm items-center justify-center h-32 w-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
      <Plus />
    </div>
  ) : (
    <div className="rounded-xl bg-card text-card-foreground shadow-sm content-center h-32 w-full p-6">
      {!loading ? (
        <div className="flex justify-between gap-4 items-center">
          {/* Col 1 */}
          <div className="w-full">
            <div className="text-[10px] text-gray-500 flex items-center gap-1">
              <span className="uppercase">{title}</span>
              {tooltip && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <div className="text-xs">{subtitle}</div>
            <div className="h-6 mb-1">
              {data ? (
                <span className="font-bold text-2xl">
                  {data && (isCurrency || progress)
                    ? data.toLocaleString("fr-FR", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      })
                    : data.toLocaleString("fr-FR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                </span>
              ) : (
                <span className="font-extrabold text-2xl">-</span>
              )}{" "}
              <span>{type}</span>
            </div>
            {progress && <Progress className="bg-gray-100" value={data} />}
          </div>
          {/* Col 2 */}
          <div className="content-center">
            <div className="size-12 bg-turquoise rounded-lg flex justify-center items-center text-white">
              <IconComponent className="w-4" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between gap-4 p-6 ">
          <div className="space-y-2">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-4 w-[75%]" />
          </div>
          <Skeleton className="h-12 w-12 rounded-md" />
        </div>
      )}
    </div>
  );
};

export default DataCard;
