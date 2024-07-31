import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Demo() {
  return (
    <div>
      <div className="flex w-full uppercase justify-center items-center mt-52">
        Demo time <span className="text-blue-500">!</span>
      </div>
      <div className="flex gap-5 items-center justify-center mt-20">
        <Card className="w-52">
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
        <Card className="w-52">
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
        <Card className="w-52">
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
