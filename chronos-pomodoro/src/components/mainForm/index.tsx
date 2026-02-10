import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import type { HomeProps } from "../../pages/Home";

export function MainForm ({ state }: HomeProps){
    return(
        <form action="" className="form">
                <div className="formRow">
                    <DefaultInput 
                    labelText='task' 
                    id='input' 
                    type='text' 
                    placeholder='Digite algo'
                    />
                </div>
            
                <div className="formRow">
                    <p>Próximo intervalo de {state.config.workTime}</p>
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