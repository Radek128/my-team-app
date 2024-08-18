import React from 'react';
import { TeamMember } from '../../api/member';
import '../../styles.scss';

interface MemberProfileModalProps {
  onClose: () => void,
  member: TeamMember,
  status: string,
}
const MemberProfileModal = ({ onClose, member, status }: MemberProfileModalProps) => {

  return (
    <div className="modal">
      <h2>Profil członka zespołu</h2>
      <img src={member.avatar} alt={member.firstName} className="member-avatar" />
      <p>Imię i nazwisko: {member.firstName}</p>
      <p>Adres e-mail: {member.email}</p>
      <p>Numer telefonu: {member.phoneNumber}</p>
      <p>Status: {status}</p>
      <button onClick={onClose}>Zamknij</button>
    </div>
  );
};

export default MemberProfileModal;
