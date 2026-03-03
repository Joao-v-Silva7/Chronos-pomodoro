import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu(){
    const [theme, setTheme] = useState<AvailableThemes>(() => { //configurando o valor
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark'; 
        return storageTheme;
    });

    //trocando icone ao mudar de tema 
    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    //função pra lidar com troca de tema
    function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.preventDefault(); //não segue o link
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme;
        });
    }
    /*
    useEffect(() =>{
        console.log('useEffect sem dependências', Date.now());
    }); // Executado toda vez que o componente renderiza na tela */

    /*
    useEffect(() => {
        console.log('useEffect com  arrays deps vazio', Date.now());
    }, []); // Executa apenas quando o React montar o componente na tela pela primeira vez  */

    useEffect(() =>{
         document.documentElement.setAttribute('data-theme', theme);
         localStorage.setItem('theme', theme); //salvando o tema no localStorage
    }, [theme]); // Executa apenas quando o valor de theme muda
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
        href='#' 
        aria-label='Ver histórico'
        title='Histórico'
        >
            <HistoryIcon />
        </a>

        <a 
        className={styles.menuLink} 
        href='#' 
        aria-label='Ver configurações' 
        title='Configurações'
        >
            <SettingsIcon/>
        </a>

        <a 
        className={styles.menuLink} 
        href='#' 
        aria-label='Trocar o tema' 
        title='Trocar tema'
        onClick={handleThemeChange}
        >
           {nextThemeIcon[theme]}
        </a>
    </nav>
    )
}