import { useTimersStore } from "@/utils/useTimersStore";
import { DragDropProvider } from "@dnd-kit/react";

import Timer from "./Timer";

export default function TimerList() {
  const { timers, handleDragMove } = useTimersStore();

  return (
    <div className="w-screen flex flex-wrap">
      <DragDropProvider onDragEnd={handleDragMove}>
        {timers.map((t: TimerType, index: number) => (
          <Timer key={t.id} timer={t} index={index} />
        ))}
      </DragDropProvider>
    </div>
  );
}
