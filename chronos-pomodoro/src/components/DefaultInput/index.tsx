//input do prorpio JSX
type DefaultInputProps = {
    id: string;
} & React.ComponentProps<'input'>
//unimos duas propriedades dentro de um tipo
export function DefaultInput({id, type }: DefaultInputProps){
    return(
        <>
        <label htmlFor={id}>Task</label>
        <input id={id} type={type} />
        </>
    )
}