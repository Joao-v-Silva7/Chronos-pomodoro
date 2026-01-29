import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu(){
    const [theme, setTheme] = useState<AvailableThemes>('dark');
    //função pra lidar com troca de tema
    function handleThemeChange(
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ){
        e.preventDefault(); //não segue o link
        console.log('clicadooooooooooooo')

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme;
        });

        // document.documentElement.setAttribute('data-theme', theme);
    }

    return (
    <nav className={styles.menu}>
        <a 
        className={styles.menuLink} 
        href='#' 
        aria-label='Ir para a home' 
        title='home'
        >
            <HouseIcon/>
        </a>

        <a 
        className={styles.menuLink} 
        href='#' aria-label='Ver histórico' 
        title='Histórico'
        >
            <HistoryIcon />
        </a>

        <a 
        className={styles.menuLink} 
        href='#' aria-label='Ver configurações' 
        title='Configurações'
        >
            <SettingsIcon/>
        </a>

        <a 
        className={styles.menuLink} 
        href='#' 
        aria-label='Ir para a home' 
        title='Trocar tema'
        onClick={handleThemeChange}
        >
            <SunIcon/>
        </a>
    </nav>
    )
}