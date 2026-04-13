import Timer from "./Timer";

function TimerList({
  timers,
  startTimer,
  stopTimer,
  resetTimer,
  removeTimer,
  setTimerName,
  setTimerColour,
}: {
    timers: TimerType[],
    startTimer: (id: number) => void,
    stopTimer: (id: number) => void,
    resetTimer: (id: number) => void,
    removeTimer: (id: number) => void,
    setTimerName: (id: number, name: string) => void,
    setTimerColour: (id: number, name: string) => void,
}) {
  return (
    <div className="w-screen flex flex-wrap">
      {timers.map((t: TimerType) => (
        <Timer
          key={t.id}
          timer={t}
          onStart={() => startTimer(t.id)}
          onStop={() => stopTimer(t.id)}
          onReset={() => resetTimer(t.id)}
          onRemove={() => removeTimer(t.id)}
          onEditName={(e) => setTimerName(t.id, e.target.value)}
          onEditColour={(value) => setTimerColour(t.id, value)}
        />
      ))}
    </div>
  );
}

export default TimerList;