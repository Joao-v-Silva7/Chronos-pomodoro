import styles from './styles.module.css'

//button do proprio JSX
type DefaultButtonProps = {
    icon: React.ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>
//unimos duas propriedades dentro de um tipo
export function DefaultButton({icon, color='green', ...props }: DefaultButtonProps){ //"...rest" para mandar o restante das coisas do button
    return(
        <>
        <button className={`${styles.button} ${styles[color]}`} {...props}>
            {icon}
        </button>
        </>
    )
}