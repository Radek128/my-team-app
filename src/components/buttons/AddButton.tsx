interface AddButtonProps {
    text: string,
    onClickHandler: () => void
}
export const AddButton = ({text, onClickHandler}: AddButtonProps) => {

return(
 <button onClick={onClickHandler}>
    {text}
  </button>
)}