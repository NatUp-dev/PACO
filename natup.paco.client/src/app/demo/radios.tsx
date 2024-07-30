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

export default function Radios() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Radio</CardTitle>
        <CardDescription>All radio avalaible</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-xs py-2">aspects</div>
        <div className="flex gap-6 items-end">
          <RadioGroup
            defaultValue="option-one"
            orientation="vertical"
            className="flex"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
            </div>
          </RadioGroup>
        </div>
        <div className="pt-2">
          <RadioGroup
            defaultValue="option-one"
            orientation="vertical"
            className="flex"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label size={"small"} htmlFor="option-one">
                Option label
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="text-xs py-2">group inline</div>
        <div className="flex gap-10">
          <RadioGroup
            defaultValue="option1bis"
            orientation="horizontal"
            className="flex"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option1bis" id="option1bis" />
              <Label size={"small"} htmlFor="option1bis">
                Option 1
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option2bis" id="option2bis" />
              <Label size={"small"} htmlFor="option2bis">
                Option 2
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option3bis" id="option3bis" />
              <Label size={"small"} htmlFor="option3bis">
                Option 3
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option4bis" id="option4bis" />
              <Label size={"small"} htmlFor="option4bis">
                Option 4
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="text-xs py-2">group column</div>
        <div className="flex flex-col gap-1">
          <RadioGroup
            defaultValue="option1ter"
            orientation="vertical"
            className="flex-col"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option1ter" id="option1ter" />
              <Label size={"small"} htmlFor="option1ter">
                Option 1
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option2ter" id="option2ter" />
              <Label size={"small"} htmlFor="option2ter">
                Option 2
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option3ter" id="option3ter" />
              <Label size={"small"} htmlFor="option3ter">
                Option 3
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option4ter" id="option4ter" />
              <Label size={"small"} htmlFor="option4ter">
                Option 4
              </Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}
