import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Label } from "recharts";

export default function Icons() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Icons</CardTitle>
          <CardDescription>Icons Lucide React</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6 items-center flex-wrap">
            <Icon iconName="CircleAlert" size={"small"}></Icon>
            <Icon iconName="CircleAlert" size={"default"}></Icon>
            <Icon iconName="CircleAlert" size={"large"}></Icon>

            <Icon
              iconName="Wheat"
              className="text-yellow-800 bg-yellow-300"
              size={"small"}
              round
            ></Icon>
            <Icon
              iconName="Wheat"
              size={"default"}
              className="text-yellow-800 bg-yellow-300"
              round
            ></Icon>
            <Icon
              iconName="Wheat"
              className="text-yellow-800 bg-yellow-300"
              size={"large"}
              round
            ></Icon>

            <Icon
              iconName="Carrot"
              className="text-carrot-foreground bg-carrot"
              round
            ></Icon>

            <Icon iconName="TriangleAlert"></Icon>
            <Icon iconName="Check"></Icon>
            <Icon iconName="CircleCheck"></Icon>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Icons</CardTitle>
          <CardDescription>Icons Custom</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6 items-center flex-wrap w-">
            <Icon iconName="beet" tooltip="Betterave" size={"default"}></Icon>
            <Icon
              iconName="potato"
              tooltip="Pomme de terre"
              size={"default"}
            ></Icon>
            <Icon iconName="cow" tooltip="Bovins" size={"default"}></Icon>
            <Icon iconName="sheep" tooltip="Ovins" size={"default"}></Icon>
          </div>
          <br></br>
          <div className="flex gap-2 items-center flex-wrap w-">
            <Icon
              iconName="beet"
              tooltip="Betterave"
              size={"small"}
              round
              className="bg-beet"
            ></Icon>
            <Icon
              iconName="potato"
              tooltip="Pomme de terre"
              size={"small"}
              round
              className="bg-potato"
            ></Icon>
            <Icon
              iconName="cow"
              tooltip="Bovins"
              size={"small"}
              round
              className="bg-cow"
            ></Icon>
            <Icon
              iconName="sheep"
              tooltip="Ovins"
              size={"small"}
              round
              className="bg-sheep"
            ></Icon>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
