import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Pies from "./pies";
import Bars from "./bars";
import DataCards from "./datacards";
import CustomCharts from "./customcharts";

export default function charts() {
  return (
    <div className="px-20 py-10">
      <div className="pb-10 uppercase">
        Charts <span className="text-blue-500">!</span>
      </div>
      <div className="flex flex-col gap-10">
        <Tabs defaultValue="pie" className="w-full">
          <TabsList>
            <TabsTrigger value="pie">Pie Chart</TabsTrigger>
            <TabsTrigger value="bar">Bar Chart</TabsTrigger>
            <TabsTrigger value="datacard">Data Card</TabsTrigger>
            <TabsTrigger value="customchart">Custom Chart</TabsTrigger>
          </TabsList>
          <TabsContent value="pie">
            <Pies />
          </TabsContent>
          <TabsContent value="bar">
            <Bars />
          </TabsContent>
          <TabsContent value="datacard">
            <DataCards />
          </TabsContent>
          <TabsContent value="customchart">
            <CustomCharts />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
