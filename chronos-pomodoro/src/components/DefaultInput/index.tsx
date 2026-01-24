//input do prorpio JSX
type DefaultInputProps = {
    id: string;
    labelText: string;
} & React.ComponentProps<'input'>
//unimos duas propriedades dentro de um tipo
export function DefaultInput({id, type, labelText, ...rest }: DefaultInputProps){ //"...rest" para mandar o restante das coisas do input
    return(
        <>
        <label htmlFor={id}>{labelText}</label>
        <input id={id} type={type} {...rest}/>
        </>
    )
}