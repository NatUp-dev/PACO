import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkboxs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Checkbox</CardTitle>
        <CardDescription>All checkbox avalaible</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-xs py-2">aspects</div>
        <div className="flex gap-6 items-end">
          <div className="flex gap-10">
            <Checkbox checked="indeterminate" />
            <Checkbox />
            <Checkbox checked />
          </div>
        </div>
        <div className="text-xs py-2">group inline</div>
        <div className="flex gap-10">
          <div className="flex items-center gap-2">
            <Checkbox id="option1" />
            <Label size={"small"} htmlFor="option1">
              Option 1
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="option2" />
            <Label size={"small"} htmlFor="option2">
              Option 2
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="option3" />
            <Label size={"small"} htmlFor="option3">
              Option 3
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="option4" />
            <Label size={"small"} htmlFor="option4">
              Option 4
            </Label>
          </div>
        </div>
        <div className="text-xs py-2">group column</div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Checkbox id="option1bis" />
            <Label size={"small"} htmlFor="option1bis">
              Option 1
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="option2bis" />
            <Label size={"small"} htmlFor="option2bis">
              Option 2
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="option3bis" />
            <Label size={"small"} htmlFor="option3bis">
              Option 3
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="option4bis" />
            <Label size={"small"} htmlFor="option4bis">
              Option 4
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
