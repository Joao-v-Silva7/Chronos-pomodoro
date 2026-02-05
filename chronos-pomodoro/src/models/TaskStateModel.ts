import type { TaskModel } from "./TaskModel"

//Estado -> Componente -> Filhos

export type TaskStateModel = {
    task: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number; // 1 a 8 
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}