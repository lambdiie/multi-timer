import { useTimers } from "@/utils/useTimers";
import TimerList from "@/components/TimerList";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus } from "lucide-react";

function App() {
  const {
    timers,
    addTimer,
    removeTimer,
    startTimer,
    stopTimer,
    resetTimer,
    setTimerName,
    setTimerColour,
  } = useTimers();

  return (
    <div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={addTimer}
            variant="outline"
            aria-label="Add Timer"
            size="lg"
            className="fixed top-4 left-4 z-50"
          >
            <Plus />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Add Timer</p>
        </TooltipContent>
      </Tooltip>

      <TimerList
        timers={timers}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        removeTimer={removeTimer}
        setTimerName={setTimerName}
        setTimerColour={setTimerColour}
      />
    </div>
  );
}

export default App;
