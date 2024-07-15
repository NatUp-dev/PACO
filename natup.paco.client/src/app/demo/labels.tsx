import { Label } from "@/components/ui/label";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Labels() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Labels</CardTitle>
        <CardDescription>All label avalaible</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-xs py-2">size</div>
        <div className="flex gap-6 items-center">
          <Label size={"small"}>Label (small)</Label>
          <Label>Label (par défaut)</Label>
          <Label size={"large"}>Label (large)</Label>
        </div>
        <div className="text-xs py-2">required</div>
        <div className="flex gap-6 items-center">
          <Label required>Label d'un champ requis</Label>
        </div>
      </CardContent>
    </Card>
  );
}
