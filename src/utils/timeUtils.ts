export function getElapsed(timer: TimerType) {
  if (!timer.isRunning || !timer.startTime) {
    return timer.elapsed;
  }

  return timer.elapsed + (Date.now() - timer.startTime);
}

export function formatTime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  return [hrs, mins, secs]
    .map(v => String(v).padStart(2, "0"))
    .join(":");
}