import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css'
import { TimerIcon } from 'lucide-react';

export function App(){
    return (
        <>
        <Heading>
            Olá Mundo
            <button>
                <TimerIcon/>
            </button>
            </Heading>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt eum, recusandae illum dolore eligendi mollitia voluptatum distinctio laudantium aliquam. Nobis tempore numquam cum, laudantium rerum recusandae praesentium consequatur et.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore doloribus rem reprehenderit, at reiciendis ullam expedita in, dolore autem facilis minima aspernatur vel soluta, quod magnam deleniti aut dolor itaque!
        </p>
        </>
    )
}
