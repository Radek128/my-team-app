import '../../styles.scss';

interface AddButtonProps {
    text: string,
    onClickHandler: () => void
}
export const Button = ({text, onClickHandler}: AddButtonProps) => {

return(
 <button onClick={onClickHandler} className='button-confirm'>
    {text}
  </button>
)}