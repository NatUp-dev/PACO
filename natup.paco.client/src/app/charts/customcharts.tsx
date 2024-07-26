import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomChart from "@/components/ui/customchart";
import Icon from "@/components/ui/icon";

export default function CustomCharts() {
  const chartData = [
    { type: "babylou", delivered: 0, todeliver: 228.85 },
    { type: "calantis", delivered: 27.04, todeliver: 19.3 },
    { type: "hansa", delivered: 27.04, todeliver: 19.3 },
    { type: "pablo", delivered: 27.04, todeliver: 19.3 },
    { type: "perline", delivered: 278.84, todeliver: 50 },
  ];

  const chartConfig = {
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
      label: "Babylou",
      icon: "potato",
    },
    calantis: {
      color: "#95C413",
      label: "Calantis",
      icon: "Carrot",
    },
    hansa: {
      color: "#95C413",
      label: "Hansa",
      icon: "potato",
    },
    pablo: {
      color: "#95C413",
      label: "Pablo",
      icon: "beet",
    },
    perline: {
      color: "#95C413",
      label: "Perline",
      icon: "potato",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Custom chart</CardTitle>
      </CardHeader>
      <CardContent>
        <CustomChart conf={chartConfig} data={chartData} />
        {/* <CustomChart loading /> */}
      </CardContent>
    </Card>
  );
}
