import React from 'react';
import { TeamMember } from '../../api/member';
import '../../styles.scss';
import { Modal } from '../modals/Modal';
import { Button } from '../buttons/Button';

interface MemberProfileModalProps {
  onClose: () => void,
  member: TeamMember,
  status: string,
  isOpen: boolean
}
const MemberProfileModal = ({ onClose, member, status, isOpen }: MemberProfileModalProps) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
    <div className="modal">
      <div className="modal-confirm-header">{`${member.firstName} ${member.lastName}`}</div>
      <img src={member.avatar} alt={member.firstName} className="member-avatar" />
      <p>{status}</p>
      <div className='modal-confirm-body'>
      <p>Imię: {member.firstName}</p>
      <p>Nazwisko: {member.lastName}</p>
      <p>Adres e-mail: {member.email}</p>
      <p>Numer telefonu: {member.phoneNumber}</p>
      </div>
      <Button onClickHandler={onClose} text={"Zamknij"}/>
    </div>
    </Modal>
  );
};

export default MemberProfileModal;
