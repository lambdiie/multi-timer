const KEY = "timers";

export function loadTimers() {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveTimers(timers: TimerType[]) {
  localStorage.setItem(KEY, JSON.stringify(timers));
}