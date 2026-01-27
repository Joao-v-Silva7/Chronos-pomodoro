import styles from './styles.module.css'

//desestruturando diretamente no parametrp
export function Footer(){
    return <footer className={styles.footer}>
        <a href=''>Entenda como funciona a técnica pomodoro</a>
        <a href=''>Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</a>
    </footer>
}