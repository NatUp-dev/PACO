import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataCards from "./datacards";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Datalists from "./datalists";

export default function tables() {
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
          Charts <span className="text-blue-500">!</span>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Tabs defaultValue="datacard" className="w-full">
          <TabsList>
            <TabsTrigger value="datacard">Data Card</TabsTrigger>
            <TabsTrigger value="datalist">Data list</TabsTrigger>
          </TabsList>

          <TabsContent value="datacard">
            <DataCards />
          </TabsContent>
          <TabsContent value="datalist">
            <Datalists />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
