import { useEffect, useState } from "react";
import { getElapsed, formatTime } from "../utils/timeUtils";

function Timer({
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
  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (timer.isRunning) {
      onStop(e);
    } else {
      onStart(e);
    }
  }

  return (
    <div className="flex flex-col grow basis-1/3">
      <button
        onClick={onClick}
        className={`h-60 text-6xl bg-fuchsia-500 hover:cursor-pointer hover:brightness-125 ${timer.isRunning && "brightness-125"}`}
      >
        <TimerText timer={timer} />
      </button>
      <input type="text" value={timer.name} onChange={onEdit} className="text-center" />
      <button onClick={onReset}>Reset</button>
      <button onClick={onRemove}>Remove</button>
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
