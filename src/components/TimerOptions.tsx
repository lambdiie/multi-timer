import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ConfirmationModal from "@/components/ConfirmationModal";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DialogTrigger } from "@/components/ui/dialog";
import { Play, Square, RotateCcw, Trash2 } from "lucide-react";
import ColourPickerButton from "./ColourPicker";

function TimerOptions({
  timer,
  onStart,
  onStop,
  onReset,
  onRemove,
  onEditName,
  onEditColour,
}: {
  timer: TimerType;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onRemove: () => void;
  onEditName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEditColour: (value: string) => void;
}) {
  return (
    <div className="flex py-2 w-full justify-center">
      <Input
        placeholder="Untitled"
        value={timer.name}
        onChange={onEditName}
        className="text-center max-w-xs"
      />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={onStart} variant="outline" aria-label="Start">
            <Play />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Start</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={onStop} variant="outline" aria-label="Stop">
            <Square />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Stop</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <ColourPickerButton value={timer.colour} onChange={onEditColour}/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit Colour</p>
        </TooltipContent>
      </Tooltip>
      <ConfirmationModal name="Reset" onSubmit={onReset}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button variant="outline" aria-label="Reset">
                <RotateCcw />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Reset</p>
          </TooltipContent>
        </Tooltip>
      </ConfirmationModal>
      <ConfirmationModal name="Remove" onSubmit={onRemove}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button variant="outline" aria-label="Remove">
                <Trash2 />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Remove</p>
          </TooltipContent>
        </Tooltip>
      </ConfirmationModal>
    </div>
  );
}

export default TimerOptions;
