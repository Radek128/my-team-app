import React from 'react';
import { Modal } from '../../controls/modals/Modal';
import { Button } from '../../controls/buttons/Button';

interface ConfirmationModalProps {
  isOpen: boolean,
  onClose: () => void,
  text: string
}

export const ConfirmationModal = ({isOpen, text, onClose } : ConfirmationModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <p>{text}</p>
      <Button onClickHandler={onClose} text='Zamknij'/>
    </Modal>
  );
}
