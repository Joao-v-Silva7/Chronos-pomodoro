import type { TaskModel } from "../models/TaskModel";

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
    if(currentCycle % 8 === 0) return 'longBreakTime';  // pegando o multiplo de 8 com "%"
    if(currentCycle % 2 === 0) return 'shortBreakTime'; //fazendo o mesmo aqui

    return 'workTime';
}