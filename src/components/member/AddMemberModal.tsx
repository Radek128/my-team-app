import React, { useState } from 'react';
import { createMember, TeamMember } from '../../api/member';
import '../../styles.scss';

interface AddMemberProps {
  onClose: () => void,
  teamId: string
}

const AddMemberModal = ({ onClose, teamId } : AddMemberProps) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [picture, setPicture] = useState<string>('')

  const handleSubmit = async() => {
    const teamMember: TeamMember = {
    teamId: teamId,
    isActive: true,
    firstName: name,
    phoneNumber: phone,
    avatar: picture,
    lastName: name,
    email: email,
    memberId: crypto.randomUUID(), 
    };
    await createMember(teamMember)
    onClose();
  };

  return (
    <div className="modal">
      <h2>Dodawanie nowego członka zespołu</h2>
      <input type="text" placeholder="Imię i nazwisko" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Adres e-mail" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="tel" placeholder="Numer telefonu" value={phone} onChange={e => setPhone(e.target.value)} />
      <input type="text" placeholder="Link do zdjęcia" value={picture} onChange={e => setPicture(e.target.value)} />
      <button onClick={handleSubmit}>Potwierdź</button>
      <button onClick={onClose}>Anuluj</button>
    </div>
  );
};

export default AddMemberModal;
