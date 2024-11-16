import { TeamMemberDto, UpdateMember, UpdateMemberStatus } from "../../api/member"
import { TeamMemberItem } from "./MemberItem"
import '../../styles.scss';

export interface MembersListContentProps{
    members: TeamMemberDto[],
    onUpdateMemberStatus: (member: UpdateMemberStatus) => Promise<void>;
    onUpdateMember: (member: UpdateMember) => Promise<void>;
}

export const MembersListContent = ({members, onUpdateMemberStatus, onUpdateMember}: MembersListContentProps) => {

    return(
    <>
      <ul className="team-list__header-item">
        {members.map(member => (
          <TeamMemberItem key={member.memberId} 
            member={member}
            onUpdateMemberStatus={onUpdateMemberStatus}
            onUpdateMember={onUpdateMember}/>
        ))}
      </ul>
    </>
   )}