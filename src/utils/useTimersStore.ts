import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { DragOverEvent, DragEndEvent } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";

const STORAGE_KEY = "timers";
const DEFAULT_COLOUR = "FFFFFF";

type TimerStore = {
  timers: TimerType[];

  handleDragMove: (event: DragOverEvent | DragEndEvent) => void;
  addTimer: () => void;
  removeTimer: (id: string) => void;
  startTimer: (id: string) => void;
  stopTimer: (id: string) => void;
  resetTimer: (id: string) => void;
  pinTimer: (id: string) => void;
  setTimerName: (id: string, name: string) => void;
  setTimerColour: (id: string, colour: string) => void;
};

export const useTimersStore = create<TimerStore>()(
  persist(
    (set) => ({
      timers: [],

      handleDragMove: (event) => {
        set((state) => ({
          timers: move(state.timers, event),
        }));
      },

      addTimer: () =>
        set((state) => ({
          timers: [
            ...state.timers,
            {
              id: crypto.randomUUID(),
              startTime: null,
              elapsed: 0,
              isPinned: false,
              isRunning: false,
              name: "",
              colour: DEFAULT_COLOUR,
            },
          ],
        })),

      removeTimer: (id) =>
        set((state) => ({
          timers: state.timers.filter((t) => t.id !== id),
        })),

      startTimer: (id) =>
        set((state) => ({
          timers: state.timers.map((t) =>
            t.id === id && !t.isRunning
              ? { ...t, isRunning: true, startTime: Date.now() }
              : t,
          ),
        })),

      stopTimer: (id) =>
        set((state) => ({
          timers: state.timers.map((t) =>
            t.id === id && t.isRunning && t.startTime
              ? {
                  ...t,
                  isRunning: false,
                  elapsed: t.elapsed + (Date.now() - t.startTime),
                  startTime: null,
                }
              : t,
          ),
        })),

      resetTimer: (id) =>
        set((state) => ({
          timers: state.timers.map((t) =>
            t.id === id
              ? { ...t, elapsed: 0, startTime: null, isRunning: false }
              : t,
          ),
        })),

      pinTimer: (id) =>
        set((state) => ({
          timers: state.timers.map((t) =>
            t.id === id
              ? { ...t, isPinned: !t.isPinned }
              : { ...t, isPinned: false }
          ),
        })),

      setTimerName: (id, name) =>
        set((state) => ({
          timers: state.timers.map((t) => (t.id === id ? { ...t, name } : t)),
        })),

      setTimerColour: (id, colour) =>
        set((state) => ({
          timers: state.timers.map((t) => (t.id === id ? { ...t, colour } : t)),
        })),
    }),
    {
      name: STORAGE_KEY,
    },
  ),
);
