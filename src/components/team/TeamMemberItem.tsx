import { TeamMemberDto, UpdateMemberStatus, updateMemberStatus } from '../../api/member';
import { useState } from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MemberProfileModal from '../member/MemberProfileModal';
import '../../styles.scss';
import { ActionModal } from '../member/MemberActionModal';

interface AddMemberProps {
  member: TeamMemberDto,
  handleCloseModal: () => void;
}

export const TeamMemberItem = ({ member, handleCloseModal } : AddMemberProps) => {
  const [isMemberProfileOpen, setMemberProfileOpen] = useState<boolean>(false);
  const [isActionModalOpen, setActionModalOpen] = useState<boolean>(false);
  const status = member.isActive ? "Aktywny" : "Nieaktywny";
  const dateObject = new Date(member.createdOn).toLocaleDateString();

  const hanldeClickMemberItem =  () => {
    setMemberProfileOpen(true);
  }

  const handleClose =  () => {
    handleCloseModal();
    setMemberProfileOpen(false);
  }

  const handleCloseActionModal = () => {
    handleCloseModal();
    setActionModalOpen(false);
  }

  const handleActionChangeStatus = async () => {
    const model: UpdateMemberStatus = {
      memberId : member.memberId, 
      isActiveStatus : !member.isActive
    }

    await updateMemberStatus(model);
    handleCloseActionModal();
  }
  
  return (
    <>
    <li className="team-list__item" onClick={hanldeClickMemberItem}>
      <img src={member.avatar} alt={member.firstName} className="member-avatar" />
      <div className="member-info">
        <p className="member-name">{member.firstName}</p>
        <p className="member-last">{member.lastName}</p>
        <p className="member-email">{member.email}</p>
        <p className="member-phone">{member.phoneNumber}</p>
        <p className="member-status">{status}</p>
        <p className="member-date">{dateObject}</p>
      </div>
    </li>
    <div onClick={() => setActionModalOpen(true)}><FormatListBulletedIcon/></div>   
    <MemberProfileModal 
      isOpen ={isMemberProfileOpen} 
      member={member}
      onClose={handleClose} 
      status={status}/>
    <ActionModal
     actionHandler={handleActionChangeStatus} 
     isOpen={isActionModalOpen} 
     isActive={member.isActive } 
     onClose={handleCloseActionModal}/>
    </>
  );
};

