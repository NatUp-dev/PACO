"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "./label";
import NodataSvg from "@/assets/nodata.svg";

interface NoDataProps {
  title?: string;
  subtitle?: string;
}

const NoData: React.FC<NoDataProps> = ({ title, subtitle }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4 text-center">
          <div className="self-center">
            <NodataSvg className="w-64 h-48" />
          </div>
          <Label>{title}</Label>
          {subtitle && <Label size={"small"}>{subtitle}</Label>}
        </div>
      </CardContent>
    </Card>
  );
};

export default NoData;
