"use client";

import * as React from "react";
import { Info, Plus, icons } from "lucide-react";
import { cn } from "@/lib/utils";
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
import { Label } from "./label";
import { Badge, BadgeProps } from "./badge";
import NoData from "./nodata";

type ListItem = {
  label: string;
  value: number | string;
  type?: string;
  badge?: React.ReactNode;
};

interface DataListProps {
  title?: string;
  data?: ListItem[];
  loading?: boolean;
  nodatatitle: string;
  nodatasubtitle?: string;
}

const DataList: React.FC<DataListProps> = ({
  title,
  data,
  loading,
  nodatatitle,
  nodatasubtitle,
}) => {
  return !loading ? (
    data ? (
      <Card>
        <CardHeader>
          <Label className="font-bold">{title} </Label>
        </CardHeader>
        <CardContent>
          {data.map((item, index) => (
            <div
              className={cn(
                "flex justify-between items-center pb-3 pt-3",
                index > 0 ? "border-t" : ""
              )}
              key={index}
            >
              <div>
                <div className="uppercase text-xs text-gray-500">
                  {item.label}
                </div>
                <div>
                  <span className="font-bold">
                    {item.value.toLocaleString("fr-FR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  {item.type && <span>{" " + item.type}</span>}
                </div>
              </div>
              <div>{item.badge}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    ) : (
      <NoData title={nodatatitle} subtitle={nodatasubtitle} />
    )
  ) : (
    <Card>
      <CardHeader>
        <Label className="font-bold">{title} </Label>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center pb-3 pt-3 ">
          <div className="space-y-2 w-full">
            <Skeleton className="h-4 w-[70px]" />
            <Skeleton className="h-4 w-[90px]" />
          </div>
          <Skeleton className="h-6 w-[90px]" />
        </div>
        <div className="flex justify-between items-center pb-3 pt-3 border-t">
          <div className="space-y-2 w-full">
            <Skeleton className="h-4 w-[70px]" />
            <Skeleton className="h-4 w-[90px]" />
          </div>
          <Skeleton className="h-6 w-[90px]" />
        </div>
        <div className="flex justify-between items-center pb-3 pt-3 border-t">
          <div className="space-y-2 w-full">
            <Skeleton className="h-4 w-[70px]" />
            <Skeleton className="h-4 w-[90px]" />
          </div>
          <Skeleton className="h-6 w-[90px]" />
        </div>
        <div className="flex justify-between items-center pb-3 pt-3 border-t">
          <div className="space-y-2 w-full">
            <Skeleton className="h-4 w-[70px]" />
            <Skeleton className="h-4 w-[90px]" />
          </div>
          <Skeleton className="h-6 w-[90px]" />
        </div>
        <div className="flex justify-between items-center pb-3 pt-3 border-t">
          <div className="space-y-2 w-full">
            <Skeleton className="h-4 w-[70px]" />
            <Skeleton className="h-4 w-[90px]" />
          </div>
          <Skeleton className="h-6 w-[90px]" />
        </div>
      </CardContent>
    </Card>
  );
};

export default DataList;
