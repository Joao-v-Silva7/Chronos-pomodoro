import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm (){
    const { setState } = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null);

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
            duration: 1,
            type: 'workTime'    
        };

        const secondsRemaining = newTask.duration * 60;

        setState(prevState =>{
            return {
                ...prevState,
                config: {...prevState.config},
                activeTask: newTask,
                currentCycle: 1, //conferir depois,
                secondsRemaining,
                formattedSecondsRemaining: '00:00',
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