import React from "react";
import Buttons from "./buttons";
import Labels from "./labels";
import Inputs from "./inputs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Selects from "./selects";

export default function Demo() {
  return (
    <div className="px-20 py-10">
      <div className="pb-20">Hello !</div>
      <div className="flex flex-col gap-10">
        <Tabs defaultValue="buttons" className="w-full">
          <TabsList>
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="labels">Labels</TabsTrigger>
            <TabsTrigger value="inputs">Inputs</TabsTrigger>
            <TabsTrigger value="selects">Selects</TabsTrigger>
          </TabsList>
          <TabsContent value="buttons">
            <Buttons />
          </TabsContent>
          <TabsContent value="labels">
            <Labels />
          </TabsContent>
          <TabsContent value="inputs">
            <Inputs />
          </TabsContent>
          <TabsContent value="selects">
            <Selects />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
