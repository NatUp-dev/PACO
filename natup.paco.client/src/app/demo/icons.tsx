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
              className="text-wheat-foreground bg-wheat"
              size={"small"}
              round
            ></Icon>
            <Icon
              iconName="Wheat"
              size={"default"}
              className="text-wheat-foreground bg-wheat"
              round
            ></Icon>
            <Icon
              iconName="Wheat"
              className="text-wheat-foreground bg-wheat"
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
            <Icon iconName="Potato" size={"default"} />
            <Icon iconName="Beet" size={"default"} />
            <Icon iconName="Cow" size={"default"} />
            <Icon iconName="Sheep" size={"default"} />
            <Icon iconName="CO2" size={"default"} />
            <Icon iconName="Engrais_protection" size={"default"} />
            <Icon iconName="Engrais" size={"default"} />
            <Icon iconName="Granules" size={"default"} />
            <Icon iconName="Seed" size={"default"} />
            <Icon iconName="Plant" size={"default"} />
            <Icon iconName="Toolsgarden" size={"default"} />
            <Icon iconName="Ficelle" size={"default"} />
          </div>
          <br></br>
          <div className="flex gap-2 items-center flex-wrap w-">
            <Icon
              iconName="Beet"
              tooltip="Betterave"
              size={"default"}
              round
              className="bg-beet text-beet-foreground"
            ></Icon>
            <Icon
              iconName="Potato"
              tooltip="Pomme de terre"
              size={"default"}
              round
              className="bg-potato text-potato-foreground"
            ></Icon>
            <Icon
              iconName="Cow"
              tooltip="Bovins"
              size={"default"}
              round
              className="bg-cow text-cow-foreground"
            ></Icon>
            <Icon
              iconName="Sheep"
              tooltip="Ovins"
              size={"default"}
              round
              className="bg-sheep text-sheep-foreground"
            ></Icon>
            <Icon
              iconName="Plant"
              size={"default"}
              round
              className="bg-green-100"
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
