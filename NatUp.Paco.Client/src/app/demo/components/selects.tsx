"use client";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multiselect";

export default function Selects() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Select</CardTitle>
        <CardDescription>All select avalaible</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-xs py-2">size</div>
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex flex-col gap-2">
            <Label size={"small"}>small</Label>
            <Select>
              <SelectTrigger size={"small"} className="w-[280px]">
                <SelectValue placeholder="Selectionner..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="value1">Value 1</SelectItem>
                <SelectItem value="value2">Value 2</SelectItem>
                <SelectItem value="value3">Value 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label>default</Label>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Selectionner..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="value1">Value 1</SelectItem>
                <SelectItem value="value2">Value 2</SelectItem>
                <SelectItem value="value3">Value 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label size={"large"}>large</Label>
            <Select>
              <SelectTrigger size={"large"} className="w-[280px]">
                <SelectValue placeholder="Selectionner..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="value1">Value 1</SelectItem>
                <SelectItem value="value2">Value 2</SelectItem>
                <SelectItem value="value3">Value 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="text-xs py-2">multi select</div>
        <div className="flex flex-wrap gap-6 items-end">
          <div className="flex flex-col gap-2">
            <Label size={"small"}>small</Label>
            <MultiSelect
              className="w-[300px]"
              options={[
                { value: "value1", label: "Value 1" },
                { value: "value2", label: "Value 2" },
                { value: "value3", label: "Value 3" },
              ]}
              onValueChange={setValue}
              defaultValue={value}
              placeholder="Selectionner..."
              maxCount={2}
              size={"small"}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>default</Label>
            <MultiSelect
              className="w-[300px]"
              options={[
                { value: "value1", label: "Value 1" },
                { value: "value2", label: "Value 2" },
                { value: "value3", label: "Value 3" },
              ]}
              onValueChange={setValue}
              defaultValue={value}
              placeholder="Selectionner..."
              maxCount={2}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label size={"large"}>large</Label>
            <MultiSelect
              className="w-[300px]"
              options={[
                { value: "value1", label: "Value 1" },
                { value: "value2", label: "Value 2" },
                { value: "value3", label: "Value 3" },
              ]}
              onValueChange={setValue}
              defaultValue={value}
              placeholder="Selectionner..."
              maxCount={2}
              size={"large"}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
