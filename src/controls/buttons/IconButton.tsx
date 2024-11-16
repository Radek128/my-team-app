interface IconButtonProps {
    text: string,
    onClickHandler: () => void,
    icon: React.ReactNode
}

export const IconButton = ({text, onClickHandler, icon}: IconButtonProps) => {

    return(
     <button onClick={onClickHandler}>
      <span>{icon}</span>
      <p>{text}</p>
      </button>
    )}