import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm (){
    const { state, setState } = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null);

    // Ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        
        if(taskNameInput.current === null) return;
        
        const taskName = taskNameInput.current.value.trim();
        
        if(!taskName){
            toast.error('Digite o nome da tarefa');
            return;
        }

        const newTask: TaskModel= {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType
        };

        const secondsRemaining = newTask.duration * 60;

        setState(prevState =>{
            return {
                ...prevState,
                config: {...prevState.config},
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                task: [...prevState.task, newTask],
            }
        })
    }

    return(
        <form onSubmit={handleCreateNewTask} action="" className="form">
                <div className="formRow">
                    <DefaultInput 
                    labelText='task' 
                    id='input' 
                    type='text' 
                    placeholder='Digite algo'
                    //value={taskName}
                    //onChange={(e) => setTaskName(e.target.value)}
                    ref={taskNameInput}
                    />
                </div>
            
                <div className="formRow">
                    <p>Próximo intervalo de 25 min</p>
                </div>

                <div className="formRow">
                    <Cycles />

                </div>

                <div className="formRow">
                    <DefaultButton icon={<PlayCircleIcon/>}/>
                </div>
            </form>
    )
}