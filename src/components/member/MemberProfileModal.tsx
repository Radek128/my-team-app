import React, { useEffect, useState } from 'react';
import { TeamMember, UpdateMember, updateMember } from '../../api/member';
import '../../styles.scss';
import { Modal } from '../modals/Modal';
import { Button } from '../buttons/Button';
import { EditionSection, InputFileds } from './EditionSection';

interface MemberProfileModalProps {
  onClose: () => void,
  member: TeamMember,
  status: string,
  isOpen: boolean
}

const MemberProfileModal = ({ onClose, member, status, isOpen }: MemberProfileModalProps) => {
  const [updatedMember, setMember] = useState<UpdateMember>({
    memberId: member.memberId,
    firstName: member.firstName,
    lastName: member.lastName,
    phoneNumber: member.phoneNumber,
    email: member.email,
  })

  useEffect(() => {
    setMember({
      memberId: member.memberId,
      firstName: member.firstName,
      lastName: member.lastName,
      phoneNumber: member.phoneNumber,
      email: member.email,
    })
  }, [isOpen])

  const handleChange = async (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMember(prevState => ({
      ...prevState,
      [name]: value
  }));
    await updateMember(updatedMember);
};
  const {firstName, lastName, email, phoneNumber } = updatedMember;

  const inputFields :  InputFileds[]= [
    { type: "text", placeholder: "Imię", value: firstName, name: "firstName" },
    { type: "text", placeholder: "Nazwisko", value: lastName, name: "lastName" },
    { type: "email", placeholder: "Adres e-mail", value: email, name: "email" },
    { type: "tel", placeholder: "Numer telefonu", value: phoneNumber, name: "phoneNumber" },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
    <div className="modal">
      <div className="modal-confirm-header">{`${firstName} ${lastName}`}</div>
      <img src={member.avatar} alt={firstName} className="member-avatar" />
      <p>{status}</p>
      <div className='modal-confirm-body'>
      <EditionSection inputFields={inputFields} handleChange={handleChange}/>
      </div>
      <Button onClickHandler={onClose} text={"Zamknij"}/>
    </div>
    </Modal>
  );
};

export default MemberProfileModal;
