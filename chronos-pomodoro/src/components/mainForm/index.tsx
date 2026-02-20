import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";

export function MainForm (){
    const taskNameInput = useRef<HTMLInputElement>(null);

    function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        console.log('deu certo')
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