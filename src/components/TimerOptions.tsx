import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Play, Square, RotateCcw, Trash2 } from "lucide-react";

function TimerOptions({
  timer,
  onStart,
  onStop,
  onReset,
  onRemove,
  onEdit,
}: {
  timer: TimerType;
  onStart: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onStop: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onEdit: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
}) {
  return (
    <div className="flex">
      <Input
        placeholder="Untitled"
        value={timer.name}
        onChange={onEdit}
        className="text-center"
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
          <Button onClick={onReset} variant="outline" aria-label="Reset">
            <RotateCcw />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Reset</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={onRemove} variant="outline" aria-label="Remove">
            <Trash2 />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Remove</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

export default TimerOptions;
