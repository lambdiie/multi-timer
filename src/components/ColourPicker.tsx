import { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Brush } from "lucide-react";

function ColourPickerButton({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <TooltipTrigger asChild>
            <Button variant="outline" aria-label="Edit Colour">
              <Brush />
            </Button>
          </TooltipTrigger>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-3 space-y-3">
          <HexColorPicker
            color={value}
            onChange={onChange}
            style={{ width: "100%" }}
          />

          <HexColorInput
            color={value}
            onChange={onChange}
            prefixed
            className="w-full px-2 py-1 border rounded text-sm"
          />
        </PopoverContent>
      </Popover>

      <TooltipContent>
        <p>Edit Colour</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default ColourPickerButton;
