import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../contexts/TaskContext";

export function MainForm (){
    const {setState} = useTaskContext();

    function handleclick(){
        setState(prevState=> {
            return {
                ...prevState,
                formattedSecondsRemaining: '21:00',
            }
        })
    }
    return(
        <form action="" className="form">
            <button onClick={handleclick} type="button">Clicar</button>
                <div className="formRow">
                    <DefaultInput 
                    labelText='task' 
                    id='input' 
                    type='text' 
                    placeholder='Digite algo'
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