interface TimerType {
    id: number,
    startTime: number | null,
    elapsed: number,
    isRunning: boolean,
    name: string,
}