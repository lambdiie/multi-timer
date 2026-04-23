interface TimerType {
    id: string,
    startTime: number | null,
    elapsed: number,
    isPinned: boolean,
    isRunning: boolean,
    name: string,
    colour: string,
}