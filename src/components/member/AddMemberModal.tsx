import React, { useEffect, useState } from 'react';
import { TeamMember } from '../../api/member';
import { Button } from '../buttons/Button';
import { EditionSection, InputFileds } from './EditionSection';
import { Modal } from '../../controls/modals/Modal';
import '../../styles.scss';

interface AddMemberProps {
  isOpen: boolean,
  onClose: () => void,
  teamId: string,
  addMemberOnServerStarted: (member: TeamMember) => Promise<void>
}

interface MemberToAdd {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
}

const AddMemberModal = ({ isOpen, onClose, teamId, addMemberOnServerStarted  } : AddMemberProps) => {
  const [member, setMember] = useState<MemberToAdd>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    avatar: ""
  })

  useEffect(() => {
    setMember({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      avatar:""
    })
  }, [isOpen])

 const {firstName, lastName, phoneNumber, avatar, email} = member

  const handleSubmit = async() => {
    const teamMember: TeamMember = {
    teamId: teamId,
    isActive: true,
    firstName: firstName,
    phoneNumber: phoneNumber,
    avatar: avatar,
    lastName: lastName,
    email: email,
    memberId: crypto.randomUUID(), 
    };
    await addMemberOnServerStarted(teamMember)
    onClose();
  };

  const handleChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMember(prevState => ({
      ...prevState,
      [name]: value
  }));
};

const inputFields : InputFileds[] = [
    { type: "text", placeholder: "Imię", value: firstName, name: "firstName" },
    { type: "text", placeholder: "Nazwisko", value: lastName, name: "lastName" },
    { type: "email", placeholder: "Adres e-mail", value: email, name: "email" },
    { type: "tel", placeholder: "Numer telefonu", value: phoneNumber, name: "phoneNumber" },
    { type: "text", placeholder: "Link do zdjęcia", value: avatar, name: "avatar" }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
    <div className="modal-confirm">
      <h2>Dodawanie nowego członka zespołu</h2>
      <EditionSection inputFields={inputFields} handleChange={handleChange}/>
      <Button onClickHandler={handleSubmit} text='Potwierdź'/>
      <Button onClickHandler={onClose} text='Anuluj'/>
    </div>
    </Modal>
  );
};

export default AddMemberModal;
