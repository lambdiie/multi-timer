import { useEffect, useState } from "react";
import { getElapsed, formatTime } from "@/utils/timeUtils";
import TimerOptions from "./TimerOptions";

function Timer({
  timer,
  onStart,
  onStop,
  onReset,
  onRemove,
  onEditName,
  onEditColour,
}: {
  timer: TimerType,
  onStart: () => void,
  onStop: () => void,
  onReset: () => void,
  onRemove: () => void,
  onEditName: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onEditColour: (value: string) => void,
}) {
  function onClick() {
    if (timer.isRunning) {
      onStop();
    } else {
      onStart();
    }
  }

  return (
    <div className="flex flex-col items-center grow basis-1/3">
      <button
        onClick={onClick}
        className={`w-full h-60 text-6xl hover:cursor-pointer ${timer.isRunning && "brightness-125"}`}
        style={{ backgroundColor: timer.colour }}
      >
        <TimerText timer={timer} />
      </button>
      <TimerOptions
        timer={timer}
        onStart={onStart}
        onStop={onStop}
        onReset={onReset}
        onRemove={onRemove}
        onEditName={onEditName}
        onEditColour={onEditColour}
      />
    </div>
  );
}

function TimerText({ timer }: { timer: TimerType }) {
  const [, forceUpdate] = useState(0);

  // Re-render the component every 1/4 second
  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((x) => x + 1);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const elapsed = getElapsed(timer);

  return <h2>{formatTime(elapsed)}</h2>;
}

export default Timer;
