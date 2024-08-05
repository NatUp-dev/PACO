"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { toastme } from "@/components/ui/toast";

export default function Toasts() {
  const handleSuccessToast = () => {
    toastme({ title: "Succès", text: "Exemple de toast de succès !" });
  };

  const handleErrorToast = () => {
    toastme({
      title: "Erreur",
      text: "Exemple de toast d'erreur !",
      variant: "error",
    });
  };

  const handleSuccessActionToast = () => {
    toastme({
      title: "Succès",
      text: "Exemple de toast de succès !",
      action: () => console.log("Action"),
    });
  };

  const handleErrorActionToast = () => {
    toastme({
      title: "Erreur",
      text: "Exemple de toast d'erreur !",
      variant: "error",
      action: () => console.log("Action"),
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Toast</CardTitle>
        <CardDescription>All toast avalaible</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-xs py-2">success</div>
        <div className="flex gap-6 items-center">
          <Button variant={"secondary"} onClick={handleSuccessToast}>
            Make toast !
          </Button>
          <Button variant={"secondary"} onClick={handleSuccessActionToast}>
            Make toast (w/ button) !
          </Button>
        </div>
        <div className="text-xs py-2">error</div>
        <div className="flex gap-6">
          <Button variant={"secondary"} onClick={handleErrorToast}>
            Make toast !
          </Button>
          <Button variant={"secondary"} onClick={handleErrorActionToast}>
            Make toast (w/ button) !
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
