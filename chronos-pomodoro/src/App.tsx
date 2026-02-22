import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Toaster } from 'react-hot-toast';

export function App(){
    return (
    <TaskContextProvider>
        <Home />
        <Toaster />
    </TaskContextProvider>
)
}