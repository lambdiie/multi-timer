import { useTimersStore } from "@/utils/useTimersStore";
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
}: {
  timer: TimerType;
}) {
  const { startTimer, stopTimer, resetTimer, removeTimer, setTimerName, setTimerColour } = useTimersStore();

  return (
    <div className="flex py-2 w-full justify-center bg-white">
      <Input
        placeholder="Untitled"
        value={timer.name}
        onChange={(e) => setTimerName(timer.id, e.target.value)}
        className="text-center max-w-xs"
      />

      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={() => startTimer(timer.id)} variant="outline" aria-label="Start">
            <Play />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Start</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={() => stopTimer(timer.id)} variant="outline" aria-label="Stop">
            <Square />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Stop</p>
        </TooltipContent>
      </Tooltip>

      <ColourPickerButton value={timer.colour} onChange={(value) => setTimerColour(timer.id, value)} />

      <ConfirmationModal name="Reset" onSubmit={() => resetTimer(timer.id)}>
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

      <ConfirmationModal name="Remove" onSubmit={() => removeTimer(timer.id)}>
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
