import { TeamMemberDto, UpdateMember, UpdateMemberStatus } from '../../api/member';
import { useState } from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MemberProfileModal from '../member/MemberProfileModal';
import '../../styles.scss';
import { ActionModal } from '../member/MemberActionModal';

interface AddMemberProps {
  member: TeamMemberDto,
  onUpdateMemberStatus: (member: UpdateMemberStatus) => Promise<void>;
  onUpdateMember: (member: UpdateMember) => Promise<void>;
}

export const TeamMemberItem = ({ member, onUpdateMemberStatus, onUpdateMember } : AddMemberProps) => {
  const [isMemberProfileOpen, setMemberProfileOpen] = useState<boolean>(false);
  const [isActionModalOpen, setActionModalOpen] = useState<boolean>(false);
  const status = member.isActive ? "Aktywny" : "Nieaktywny";
  const dateObject = new Date(member.createdOn).toLocaleDateString();

  const hanldeClickMemberItem =  () => {
    setMemberProfileOpen(true);
  }

  const handleClose =  () => {
    setMemberProfileOpen(false);
  }

  const handleCloseActionModal = () => {
    setActionModalOpen(false);
  }

  const handleActionChangeStatus = async () => {
    const model: UpdateMemberStatus = {
      memberId : member.memberId, 
      isActiveStatus : !member.isActive
    }

    await onUpdateMemberStatus(model);
    handleCloseActionModal();
  }
  
  const paragraphs : string[]= [member.firstName, member.lastName, member.email, member.phoneNumber, status, dateObject]
  
  return (
    <>
    <li className="team-list__item" onClick={hanldeClickMemberItem}>
      <img src={member.avatar} alt={member.firstName} className="member-avatar" />
      <div className="member-info">
        {paragraphs.map((p, index) => (
          <p key={index}>{p}</p>)
          )}
      </div>
    </li>
    <div onClick={() => setActionModalOpen(true)}><FormatListBulletedIcon/></div>   
    <MemberProfileModal 
      isOpen ={isMemberProfileOpen} 
      member={member}
      onClose={handleClose} 
      status={status}
      onUpdateMember={onUpdateMember}/>
    <ActionModal
      actionHandler={handleActionChangeStatus} 
      isOpen={isActionModalOpen} 
      isActive={member.isActive } 
      onClose={handleCloseActionModal}/>
    </>
  );
};

