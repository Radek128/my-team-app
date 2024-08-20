import React, { useEffect, useState } from 'react';
import { createMember, TeamMember } from '../../api/member';
import { Modal } from '../modals/Modal';
import { Button } from '../buttons/Button';
import { Input } from '../../controls/Input';
import '../../styles.scss';

interface AddMemberProps {
  isOpen: boolean,
  onClose: () => void,
  teamId: string
}

interface MemberToAdd {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
}

const AddMemberModal = ({ isOpen, onClose, teamId } : AddMemberProps) => {
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
    await createMember(teamMember)
    onClose();
  };
  
  const handleChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMember(prevState => ({
      ...prevState,
      [name]: value
  }));
};

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
    <div className="modal">
      <h2>Dodawanie nowego członka zespołu</h2>
      <Input type="text" placeHolder="Imię" value={firstName} handleChange={e => handleChange("firstName", e)} />
      <Input type="text" placeHolder="Nazwisko" value={lastName} handleChange={e => handleChange("lastName", e)} />
      <Input type="email" placeHolder="Adres e-mail" value={email} handleChange={e => handleChange("email", e)} />
      <Input type="tel" placeHolder="Numer telefonu" value={phoneNumber} handleChange={e => handleChange("phoneNumber", e)} />
      <Input type="text" placeHolder="Link do zdjęcia" value={avatar} handleChange={e => handleChange("avatar", e)} />
      <Button onClickHandler={handleSubmit} text='Potwierdź'/>
      <Button onClickHandler={onClose} text='Anuluj'/>
    </div>
    </Modal>
  );
};

export default AddMemberModal;
