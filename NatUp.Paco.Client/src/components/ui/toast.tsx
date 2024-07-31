import { CircleCheck, TriangleAlert, X } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export const toastme = ({
  title,
  text,
  variant = "success",
  action,
}: {
  title: string;
  text: string;
  variant?: "success" | "error";
  action?: () => void;
}) => {
  toast.custom((t) => (
    <div
      className={cn(
        "relative w-[400px] shadow-lg p-5 border border-gray-200 rounded-lg",
        variant === "success" && "bg-white text-gray-700",
        variant === "error" && "bg-red-600 text-red-50"
      )}
    >
      <div className="absolute top-0 flex w-[calc(100%-35px)] justify-end">
        <Button
          variant={"link"}
          onClick={() => toast.dismiss(t)}
          className="p-0 rounded-full"
        >
          <X
            className={cn(
              " h-3.5 w-3.5",
              variant === "success" && "text-gray-400",
              variant === "error" && "text-red-50"
            )}
            strokeWidth={2}
          />
        </Button>
      </div>
      <div className="flex gap-4 items-center justify-between pr-4">
        <div className="flex gap-3 pr-4">
          <div>
            {variant === "success" && (
              <CircleCheck className="text-success-500" />
            )}
            {variant === "error" && <TriangleAlert className="text-red-200" />}
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-sm">{title}</div>
            <div className="font-normal text-sm">{text}</div>
          </div>
        </div>
        {action && (
          <Button
            size={"sm"}
            variant={"outline"}
            onClick={action}
            className={cn(variant === "error" && "border-white text-red-700")}
          >
            Action
          </Button>
        )}
      </div>
    </div>
  ));
};
