import { Button } from '../../controls/buttons/Button';
import '../../styles.scss';

export interface TeamListHeaderProps{
    onClickImportHandler: () => void,
    onClickAddHandler: () => void,
}

export const MembersListHeader = ({onClickImportHandler, onClickAddHandler}: TeamListHeaderProps) => {

return (
    <div className="team-list__header">
    <Button text={"Zaimportuj członka zespołu"} onClickHandler={onClickImportHandler}/>
    <Button text={"Dodaj członka zespołu"} onClickHandler={onClickAddHandler}/>
    </div>
)}