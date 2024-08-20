import React from 'react';
import { Button } from '../buttons/Button';
import { Modal } from '../../controls/modals/Modal';

interface ConfirmationModalProps {
  isOpen: boolean,
  onClose: () => void,
  text: string
}

export const ConfirmationModal = ({isOpen, text, onClose } : ConfirmationModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} >
    <div className="modal">
      <p>{text}</p>
      <Button onClickHandler={onClose} text='Zamknij'/>
    </div>
    </Modal>
  );
}
