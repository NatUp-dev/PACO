import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Demo() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 sm:gap-16 p-8">
      <div className="flex w-full uppercase justify-center items-center">
        Demo time <span className="text-blue-500">!</span>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Components</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Link
                  className={cn(buttonVariants({ variant: "outline" }))}
                  href="/demo/components"
                >
                  Accéder
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Charts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Link
                  className={cn(buttonVariants({ variant: "outline" }))}
                  href="/demo/charts"
                >
                  Accéder
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Tables & listes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Link
                  className={cn(buttonVariants({ variant: "outline" }))}
                  href="/demo/tables"
                >
                  Accéder
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>
              PACO<span className="text-blue-500">!</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Link
                  className={cn(buttonVariants({ variant: "default" }))}
                  href="/activites/suivi-de-collectes"
                >
                  Accéder
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
