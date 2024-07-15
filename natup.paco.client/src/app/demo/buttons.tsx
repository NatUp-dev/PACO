import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function Buttons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
        <CardDescription>All button avalaible</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-xs py-2">size</div>
        <div className="flex gap-6 items-center">
          <Button size={"xs"}>Valider</Button>
          <Button size={"sm"}>Valider</Button>
          <Button size={"default"}>Valider</Button>
          <Button size={"lg"}>Valider</Button>
        </div>
        <div className="text-xs py-2">type</div>
        <div className="flex gap-6">
          <Button>Valider</Button>
          <Button variant={"secondary"}>Modifier</Button>
          <Button variant={"destructive"}>Quitter</Button>
          <Button variant={"outline"}>Annuler</Button>
        </div>
        <div className="text-xs py-2">type disabled</div>
        <div className="flex gap-6">
          <Button disabled>Valider</Button>
          <Button variant={"secondary"} disabled>
            Modifier
          </Button>
          <Button variant={"destructive"} disabled>
            Quitter
          </Button>
          <Button variant={"outline"} disabled>
            Annuler
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
