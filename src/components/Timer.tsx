import { useTimersStore } from "@/utils/useTimersStore";
import { useEffect, useState } from "react";
import { getElapsed, formatTime } from "@/utils/timeUtils";
import { useSortable } from "@dnd-kit/react/sortable";

import TimerOptions from "./TimerOptions";

function Timer({
  timer,
  index,
}: {
  timer: TimerType,
  index: number,
}) {
  const { startTimer, stopTimer } = useTimersStore();

  const id = timer.id;
  const {ref} = useSortable({id, index});

  function onClick() {
    if (!timer.isRunning) {
      startTimer(timer.id);
    } else {
      stopTimer(timer.id);
    }
  }

  return (
    <div ref={ref} className="flex flex-col items-center grow basis-1/3">
      <button
        onClick={onClick}
        className={`w-full h-60 text-6xl hover:cursor-pointer ${timer.isRunning && "brightness-125"}`}
        style={{ backgroundColor: timer.colour }}
      >
        <TimerText timer={timer} />
      </button>
      <TimerOptions
        timer={timer}
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
