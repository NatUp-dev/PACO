import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Icons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Icons</CardTitle>
        <CardDescription>Icons avalaible</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-6 items-center flex-wrap">
          <Icon iconName="Wheat" color="slate" tooltip="slate"></Icon>
          <Icon iconName="Wheat" color="gray" tooltip="gray"></Icon>
          <Icon iconName="Wheat" color="zinc" tooltip="zinc"></Icon>
          <Icon iconName="Wheat" color="neutral" tooltip="neutral"></Icon>
          <Icon iconName="Wheat" color="stone" tooltip="stone"></Icon>
          <Icon iconName="Wheat" color="red" tooltip="red"></Icon>
          <Icon iconName="Wheat" color="orange" tooltip="orange"></Icon>
          <Icon iconName="Wheat" color="amber" tooltip="amber"></Icon>
          <Icon iconName="Wheat" color="yellow" tooltip="yellow"></Icon>
          <Icon iconName="Wheat" color="lime" tooltip="lime"></Icon>
          <Icon iconName="Wheat" color="green" tooltip="green"></Icon>
          <Icon iconName="Wheat" color="emerald" tooltip="emerald"></Icon>
          <Icon iconName="Wheat" color="teal" tooltip="teal"></Icon>
          <Icon iconName="Wheat" color="cyan" tooltip="cyan"></Icon>
          <Icon iconName="Wheat" color="sky" tooltip="sky"></Icon>
          <Icon iconName="Wheat" color="blue" tooltip="blue"></Icon>
          <Icon iconName="Wheat" color="indigo" tooltip="indigo"></Icon>
          <Icon iconName="Wheat" color="violet" tooltip="violet"></Icon>
          <Icon iconName="Wheat" color="purple" tooltip="purple"></Icon>
          <Icon iconName="Wheat" color="fuchsia" tooltip="fuchsia"></Icon>
          <Icon iconName="Wheat" color="pink" tooltip="pink"></Icon>
          <Icon iconName="Wheat" color="rose" tooltip="rose"></Icon>
          <Icon iconName="Wheat" color="success" tooltip="success"></Icon>
          <Icon iconName="Wheat" color="warning" tooltip="warning"></Icon>
          <Icon iconName="Wheat" color="danger" tooltip="danger"></Icon>

          <span className="text-slate-800 bg-slate-200 hidden"></span>
          <span className="text-gray-800 bg-gray-200 hidden"></span>
          <span className="text-zinc-800 bg-zinc-200 hidden"></span>
          <span className="text-neutral-800 bg-neutral-200 hidden"></span>
          <span className="text-stone-800 bg-stone-200 hidden"></span>
          <span className="text-red-800 bg-red-200 hidden"></span>
          <span className="text-orange-800 bg-orange-200 hidden"></span>
          <span className="text-amber-800 bg-amber-200 hidden"></span>
          <span className="text-yellow-800 bg-yellow-200 hidden"></span>
          <span className="text-lime-800 bg-lime-200 hidden"></span>
          <span className="text-green-800 bg-green-200 hidden"></span>
          <span className="text-emerald-800 bg-emerald-200 hidden"></span>
          <span className="text-teal-800 bg-teal-200 hidden"></span>
          <span className="text-cyan-800 bg-cyan-200 hidden"></span>
          <span className="text-sky-800 bg-sky-200 hidden"></span>
          <span className="text-blue-800 bg-blue-200 hidden"></span>
          <span className="text-indigo-800 bg-indigo-200 hidden"></span>
          <span className="text-violet-800 bg-violet-200 hidden"></span>
          <span className="text-purple-800 bg-purple-200 hidden"></span>
          <span className="text-fuchsia-800 bg-fuchsia-200 hidden"></span>
          <span className="text-pink-800 bg-pink-200 hidden"></span>
          <span className="text-rose-800 bg-rose-200 hidden"></span>
          <span className="text-success-800 bg-success-200 hidden"></span>
          <span className="text-warning-800 bg-warning-200 hidden"></span>
          <span className="text-danger-800 bg-danger-200 hidden"></span>
        </div>
      </CardContent>
    </Card>
  );
}
