import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Inputs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inputs</CardTitle>
        <CardDescription>All input avalaible</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-xs py-2">size</div>
        <div className="flex gap-6 items-end">
          <div className="flex flex-col gap-2 w-80">
            <Label size={"small"}>Label et input (small)</Label>
            <Input size={"small"} />
          </div>
          <div className="flex flex-col gap-2 w-80">
            <Label>Label et input (default)</Label>
            <Input />
          </div>
          <div className="flex flex-col gap-2 w-80">
            <Label size={"large"}>Label et input (large)</Label>
            <Input size={"large"} />
          </div>
        </div>
        <div className="text-xs py-2">type</div>
        <div className="flex gap-6 items-end">
          <div className="flex flex-col gap-2 w-80">
            <Label size={"small"}>Password (small)</Label>
            <PasswordInput size={"small"} />
          </div>
          <div className="flex flex-col gap-2 w-80">
            <Label>Password (default)</Label>
            <PasswordInput />
          </div>
          <div className="flex flex-col gap-2 w-80">
            <Label size={"large"}>Password (large)</Label>
            <PasswordInput size={"large"} />
          </div>
        </div>
        <div className="flex gap-6 items-end pt-4">
          <div className="flex flex-col gap-2 w-80">
            <Label size={"small"}>Placeholder (small)</Label>
            <Input size={"small"} placeholder="Placeholder" />
          </div>
          <div className="flex flex-col gap-2 w-80">
            <Label>Placeholder (default)</Label>
            <Input placeholder="Placeholder" />
          </div>
          <div className="flex flex-col gap-2 w-80">
            <Label size={"large"}>Placeholder (large)</Label>
            <Input size={"large"} placeholder="Placeholder" />
          </div>
        </div>
        <div className="flex gap-6 items-end pt-4">
          <div className="flex flex-col gap-2 w-80">
            <Label size={"small"}>Prefixed (small)</Label>
            <Input size={"small"} prefix="Hash" />
          </div>
          <div className="flex flex-col gap-2 w-80">
            <Label>Prefixed (default)</Label>
            <Input prefix="Hash" />
          </div>
          <div className="flex flex-col gap-2 w-80">
            <Label size={"large"}>Prefixed (large)</Label>
            <Input size={"large"} prefix="Hash" />
          </div>
        </div>
        <div className="flex gap-6 items-end pt-4">
          <div className="flex flex-col gap-2 w-80">
            <Label size={"small"}>Suffixed (small)</Label>
            <Input size={"small"} suffix="Hash" />
          </div>
          <div className="flex flex-col gap-2 w-80">
            <Label>Suffixed (default)</Label>
            <Input suffix="Hash" />
          </div>
          <div className="flex flex-col gap-2 w-80">
            <Label size={"large"}>Suffixed (large)</Label>
            <Input size={"large"} suffix="Hash" />
          </div>
        </div>
        <div className="flex gap-6 items-end pt-4">
          <div className="flex flex-col gap-2 w-80">
            <Label size={"small"}>Prefixed & Suffixed (small)</Label>
            <Input size={"small"} prefix="Hash" suffix="Hash" />
          </div>
          <div className="flex flex-col gap-2 w-80">
            <Label>Prefixed & Suffixed (default)</Label>
            <Input prefix="Hash" suffix="Hash" />
          </div>
          <div className="flex flex-col gap-2 w-80">
            <Label size={"large"}>Prefixed & Suffixed (large)</Label>
            <Input size={"large"} prefix="Hash" suffix="Hash" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
