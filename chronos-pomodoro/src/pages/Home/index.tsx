import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/mainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

export type HomeProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export function Home(props: HomeProps){
    return (    
        <MainTemplate>
            <Container>
                <CountDown {...props}/> {/* Desestruturação do objeto de props */}
            </Container>
            
            <Container>
                <MainForm {...props} />          
            </Container>
        </MainTemplate>
    )
}