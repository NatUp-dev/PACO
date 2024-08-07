import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

export default function Switchs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Radio</CardTitle>
        <CardDescription>All radio avalaible</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-xs py-2">aspects</div>
        <div className="flex gap-6 items-center">
          <Switch />
          <Switch checked />
          <Switch size={"small"} />
          <Switch checked size={"small"} />
        </div>
        <div className="text-xs py-2">group inline</div>
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <Switch id="option1" />
            <Label size={"small"} htmlFor="option1">
              Option 1
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="option2" />
            <Label size={"small"} htmlFor="option2">
              Option 2
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="option3" />
            <Label size={"small"} htmlFor="option3">
              Option 3
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="option4" />
            <Label size={"small"} htmlFor="option4">
              Option 4
            </Label>
          </div>
        </div>
        <div className="text-xs py-2">group column</div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Switch id="option1bis" />
            <Label size={"small"} htmlFor="option1bis">
              Option 1
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="option2bis" />
            <Label size={"small"} htmlFor="option2bis">
              Option 2
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="option3bis" />
            <Label size={"small"} htmlFor="option3bis">
              Option 3
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="option4bis" />
            <Label size={"small"} htmlFor="option4bis">
              Option 4
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
