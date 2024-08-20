import '../styles.scss';

export interface InputProps{
type: string,
placeHolder: string,
value: string,
handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({type , placeHolder, value, handleChange} : InputProps) => {
return <input className={"input"} type={type} placeholder={placeHolder} value={value} onChange={e => handleChange(e)} />
}