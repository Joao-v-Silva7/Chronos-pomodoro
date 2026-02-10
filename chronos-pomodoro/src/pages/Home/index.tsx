import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/mainForm";
import { MainTemplate } from "../../templates/MainTemplate";



export function Home(){
    return (    
        <MainTemplate>
            <Container>
                <CountDown /> {/* Desestruturação do objeto de props */}
            </Container>
            
            <Container>
                <MainForm />          
            </Container>
        </MainTemplate>
    )
}