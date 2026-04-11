import Timer from "./Timer";

function TimerList({
  timers,
  startTimer,
  stopTimer,
  resetTimer,
  removeTimer,
}: {
    timers: TimerType[],
    startTimer: (id: number) => void,
    stopTimer: (id: number) => void,
    resetTimer: (id: number) => void,
    removeTimer: (id: number) => void,
}) {
  return (
    <>
      {timers.map((t: TimerType) => (
        <Timer
          key={t.id}
          timer={t}
          onStart={() => startTimer(t.id)}
          onStop={() => stopTimer(t.id)}
          onReset={() => resetTimer(t.id)}
          onRemove={() => removeTimer(t.id)}
        />
      ))}
    </>
  );
}

export default TimerList;