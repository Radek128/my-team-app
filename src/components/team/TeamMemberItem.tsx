import '../../styles.scss';
import { TeamMemberDto } from '../../api/member';
import { useState } from 'react';
import MemberProfileModal from '../member/MemberProfileModal';

interface AddMemberProps {
  member: TeamMemberDto
}

const TeamMemberItem = ({ member } : AddMemberProps) => {
  const [isMemberProfileOpen, setMemberProfileOpen] = useState<boolean>(false);
  const status = member.isActive ? "Aktywny" : "Nieaktywny";
  const dateObject = new Date(member.createdOn);
  const hanldeClickMemberItem =  () => {
    setMemberProfileOpen(true);
  }
  const handleClose =  () => {
    setMemberProfileOpen(false);
  }
  
  return (
    <div>
    <li className="team-list__item" onClick={hanldeClickMemberItem}>
      <img src={member.avatar} alt={member.firstName} className="member-avatar" />
      <div className="member-info">
        <p className="member-name">{member.firstName}</p>
        <p className="member-email">{member.email}</p>
        <p className="member-phone">{member.phoneNumber}</p>
        <p className="member-status">{status}</p>
        <p className="member-date">{dateObject.toLocaleDateString()}</p>
      </div>
    </li>
    {isMemberProfileOpen && <MemberProfileModal member={member} onClose={handleClose} status={status}/>}
    </div>
  );
};

export default TeamMemberItem;
