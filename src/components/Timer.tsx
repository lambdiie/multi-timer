import { useEffect, useState } from "react";
import { getElapsed, formatTime } from "../utils/timeUtils";

function Timer({
  timer,
  onStart,
  onStop,
  onReset,
  onRemove,
}: {
  timer: TimerType;
  onStart: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onStop: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const [, forceUpdate] = useState(0);

  // Re-render the component every 1/4 second
  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((x) => x + 1);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const elapsed = getElapsed(timer);

  return (
    <div>
      <h2>{formatTime(elapsed)}</h2>

      {timer.isRunning ? (
        <button onClick={onStop}>Stop</button>
      ) : (
        <button onClick={onStart}>Start</button>
      )}

      <button onClick={onReset}>Reset</button>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default Timer;
