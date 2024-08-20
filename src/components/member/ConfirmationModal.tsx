import React from 'react';
import { Button } from '../buttons/Button';

interface ConfirmationModalProps {
  onClose: () => void,
  text: string
}

const ConfirmationModal = ({ text, onClose } : ConfirmationModalProps) => {
  return (
    <div className="modal">
      <p>{text}</p>
      <Button onClickHandler={onClose} text='Zamknij'/>
    </div>
  );
};

export default ConfirmationModal;