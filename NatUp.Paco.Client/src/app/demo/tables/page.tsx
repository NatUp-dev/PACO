import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataCards from "./datacards";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Datalists from "./datalists";
import Datatables from "./datatables";

export default function tables() {
  return (
    <div className="p-4 lg:p-8">
      <div className="pb-10 uppercase flex gap-5 items-center">
        <Link
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          href="/demo"
        >
          Retour
        </Link>
        <div>
          Tables & Listes <span className="text-blue-500">!</span>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Tabs defaultValue="datatable" className="w-full">
          <TabsList>
            <TabsTrigger value="datatable">Data Table</TabsTrigger>
            <TabsTrigger value="datacard">Data Card</TabsTrigger>
            <TabsTrigger value="datalist">Data List</TabsTrigger>
          </TabsList>

          <TabsContent value="datatable">
            <Datatables />
          </TabsContent>
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
