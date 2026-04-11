import { useEffect, useState } from "react";
import { loadTimers, saveTimers } from "./storage";

export function useTimers() {
  const [timers, setTimers] = useState(loadTimers);

  // Store timers to local storage when updated
  useEffect(() => {
    saveTimers(timers);
  }, [timers]);

  function addTimer() {
    setTimers((timers: TimerType[]) => [
      ...timers,
      {
        id: crypto.randomUUID(),
        startTime: null,
        elapsed: 0,
        isRunning: false,
      },
    ]);
  }

  function removeTimer(id: number) {
    setTimers((timers: TimerType[]) => timers.filter((t) => t.id !== id));
  }

  function startTimer(id: number) {
    setTimers((timers: TimerType[]) =>
      timers.map((t) =>
        t.id === id ? { ...t, isRunning: true, startTime: Date.now() } : t,
      ),
    );
  }

  function stopTimer(id: number) {
    setTimers((timers: TimerType[]) =>
      timers.map((t) =>
        t.id === id
          ? {
              ...t,
              isRunning: false,
              elapsed: t.elapsed + (Date.now() - t.startTime),
            }
          : t,
      ),
    );
  }

  function resetTimer(id: number) {
    setTimers((timers: TimerType[]) =>
      timers.map((t) =>
        t.id === id
          ? { ...t, elapsed: 0, startTime: null, isRunning: false }
          : t,
      ),
    );
  }

  return { timers, addTimer, removeTimer, startTimer, stopTimer, resetTimer };
}
