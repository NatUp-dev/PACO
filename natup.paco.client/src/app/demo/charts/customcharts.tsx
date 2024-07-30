import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomChart from "@/components/ui/customchart";
import CustomPieChart from "@/components/ui/customPieChart";

export default function CustomCharts() {
  const chartData = [
    { type: "babylou", delivered: 0, todeliver: 228.85 },
    { type: "calantis", delivered: 27.04, todeliver: 0 },
    { type: "hansa", delivered: 27.04, todeliver: 19.3 },
    { type: "pablo", delivered: 27.04, todeliver: 19.3 },
    { type: "perline", delivered: 165.84, todeliver: 100 },
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
      label: "Babylou",
      icon: "potato",
      className: "bg-potato",
    },
    calantis: {
      label: "Calantis",
      icon: "Carrot",
      className: "text-carrot-foreground bg-carrot",
    },
    hansa: {
      label: "Hansa",
      icon: "potato",
      className: "bg-potato",
    },
    pablo: {
      label: "Pablo",
      icon: "beet",
      className: "bg-beet",
    },
    perline: {
      label: "Perline",
      icon: "potato",
      className: "bg-potato",
    },
  };

  const pieChartConfig = {
    boeufMaine: {
      label: "Boeuf fermier du maine",
    },
    labelRouge: {
      label: "Label rouge multiraces",
    },
    LIDL: {
      label: "LIDL",
    },
    deliveries: {
      label: "Visitors",
    },
    chrome: {
      label: "Label de CHROME",
      color: "hsl(var(--chart-1))",
    },
  };

  const pieChartData = [
    { contract: "LIDL", deliveries: 22, fill: "#00677E" },
    {
      contract: "boeufMaine",
      deliveries: 12,
      fill: "#95C413",
    },
    {
      contract: "labelRouge",
      deliveries: 8,
      fill: "#14AFD1",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Custom chart</CardTitle>
        </CardHeader>
        <CardContent>
          <CustomChart conf={chartConfig} data={chartData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Custom pie chart</CardTitle>
        </CardHeader>
        <CardContent>
          <CustomPieChart
            conf={pieChartConfig}
            data={pieChartData}
            dataKey="deliveries"
            nameKey="contract"
            emptyTitle="Pas de contrat pour la récolte sélectionnée"
            emptySubtitle="Sélectionnez une autre période pour avoir une vue des contrats"
            unit="têtes"
          ></CustomPieChart>
        </CardContent>
      </Card>
    </div>
  );
}
