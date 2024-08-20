import { TeamMemberDto } from '../../api/member';
import { useState } from 'react';
import MemberProfileModal from '../member/MemberProfileModal';
import '../../styles.scss';

interface AddMemberProps {
  member: TeamMemberDto,
  handleCloseModal: () => void;
}

export const TeamMemberItem = ({ member, handleCloseModal } : AddMemberProps) => {
  const [isMemberProfileOpen, setMemberProfileOpen] = useState<boolean>(false);
  const status = member.isActive ? "Aktywny" : "Nieaktywny";
  const dateObject = new Date(member.createdOn).toLocaleDateString();

  const hanldeClickMemberItem =  () => {
    setMemberProfileOpen(true);
  }
  const handleClose =  () => {
    handleCloseModal();
    setMemberProfileOpen(false);
  }
  
  return (
    <>
    <li className="team-list__item" onClick={hanldeClickMemberItem}>
      <img src={member.avatar} alt={member.firstName} className="member-avatar" />
      <div className="member-info">
        <p className="member-name">{member.firstName}</p>
        <p className="member-email">{member.email}</p>
        <p className="member-phone">{member.phoneNumber}</p>
        <p className="member-status">{status}</p>
        <p className="member-date">{dateObject}</p>
      </div>
    </li>
    <MemberProfileModal isOpen ={isMemberProfileOpen}  member={member} onClose={handleClose} status={status}/>
    </>
  );
};

