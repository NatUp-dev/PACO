import React from "react";
import Buttons from "./buttons";
import Labels from "./labels";
import Inputs from "./inputs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Selects from "./selects";
import Checkboxs from "./checkboxs";
import Radios from "./radios";
import Switchs from "./switchs";
import Icons from "./icons";
import Tags from "./tags";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Demo() {
  return (
    <div className="px-20 py-10">
      <div className="pb-10 uppercase flex gap-5 items-center">
        <Link
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          href="/demo"
        >
          Retour
        </Link>
        <div>
          Components <span className="text-blue-500">!</span>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Tabs defaultValue="buttons" className="w-full">
          <TabsList>
            <TabsTrigger value="buttons">Button</TabsTrigger>
            <TabsTrigger value="labels">Label</TabsTrigger>
            <TabsTrigger value="inputs">Input</TabsTrigger>
            <TabsTrigger value="selects">Select</TabsTrigger>
            <TabsTrigger value="checkboxs">Checkbox</TabsTrigger>
            <TabsTrigger value="radios">Radio</TabsTrigger>
            <TabsTrigger value="switchs">Switch</TabsTrigger>
            <TabsTrigger value="icons">Icons</TabsTrigger>
            <TabsTrigger value="tags">Tags</TabsTrigger>
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
          <TabsContent value="checkboxs">
            <Checkboxs />
          </TabsContent>
          <TabsContent value="radios">
            <Radios />
          </TabsContent>
          <TabsContent value="switchs">
            <Switchs />
          </TabsContent>
          <TabsContent value="icons">
            <Icons />
          </TabsContent>
          <TabsContent value="tags">
            <Tags />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
