import { TeamMemberDto } from "../../api/member"
import { TeamMemberItem } from "./TeamMemberItem"
import '../../styles.scss';

export interface TeamListContentProps{
    members: TeamMemberDto[],
    handleCloseModal: () => void;
}

export const TeamListContent = ({members, handleCloseModal}: TeamListContentProps) => {

    return(
    <>
      <ul className="team-list__header-item">
        {members.map(member => (
          <TeamMemberItem key={member.memberId} member={member} handleCloseModal={handleCloseModal}/>
        ))}
      </ul>
    </>
   )}