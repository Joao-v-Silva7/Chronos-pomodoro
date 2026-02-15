/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {
    task: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime:15,
    },
}

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const initialContextValue = {
    state: initialState,
    setState: () => {}
}
// Criando context e passando valor inicial
export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    return (
    <TaskContext.Provider value={initialContextValue}>
        {children}
    </TaskContext.Provider>
    )
}

export function useTaskContext() {
    return useContext(TaskContext);
}