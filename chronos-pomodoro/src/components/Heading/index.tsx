import styles from './styles.module.css'

type HeadingPropos = {
    children: React.ReactNode; //aceita qualquer tipo de children
}

//desestruturando diretamente no parametrp
export function Heading({ children }: HeadingPropos){
    return <h1 className={styles.heading}>{children}</h1>
}