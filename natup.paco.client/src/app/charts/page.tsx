import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Pies from "./pies";
import Bars from "./bars";
import Lines from "./lines";
import DataCards from "./datacards";

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
            <TabsTrigger value="line">Line Chart</TabsTrigger>
            <TabsTrigger value="datacard">Data Card</TabsTrigger>
          </TabsList>
          <TabsContent value="pie">
            <Pies />
          </TabsContent>
          <TabsContent value="bar">
            <Bars />
          </TabsContent>
          <TabsContent value="line">
            <Lines />
          </TabsContent>
          <TabsContent value="datacard">
            <DataCards />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
