import { useTimers } from './utils/useTimers';
import TimerList from './components/TimerList'

function App() {
  const { timers, addTimer, removeTimer, startTimer, stopTimer, resetTimer } = useTimers();

  return (
    <div>
      <button onClick={addTimer}>Add Timer</button>

      <TimerList
        timers={timers}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        removeTimer={removeTimer}
      />
    </div>
  );
}

export default App
