import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ToggleItem {
  value: string;
  label: string;
}

interface CustomToggleProps {
  items: ToggleItem[];
  onSelectItem: (item: string | null) => void;
}

const CustomToggle: React.FC<CustomToggleProps> = ({ items, onSelectItem }) => {
  const handleToggle = (item: string) => {
    onSelectItem(item);
  };

  return (
    <div>
      <div>
        <ToggleGroup type="single" size="sm" onValueChange={handleToggle}>
          {items.map((item, index) => (
            <ToggleGroupItem key={index} value={item.value}>
              {item.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
};

export default CustomToggle;
