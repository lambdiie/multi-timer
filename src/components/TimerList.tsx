import { useTimersStore } from "@/utils/useTimersStore";
import Timer from "./Timer";

function TimerList() {
  const { timers } = useTimersStore();

  return (
    <div className="w-screen flex flex-wrap">
      {timers.map((t: TimerType, index: number) => (
        <Timer
          key={t.id}
          timer={t}
          index={index}
        />
      ))}
    </div>
  );
}

export default TimerList;