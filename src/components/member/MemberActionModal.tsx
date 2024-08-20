import React from 'react';
import { Button } from '../buttons/Button';
import { Modal } from '../../controls/modals/Modal';

interface ConfirmationModalProps {
  isActive: boolean,
  isOpen: boolean,
  onClose: () => void,
  actionHandler: () => void,
}

export const ActionModal = ({isOpen, onClose, actionHandler, isActive } : ConfirmationModalProps) => {
    const text = isActive ? "Zablokuj" : "Odblokuj"
  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <Button onClickHandler={actionHandler} text={text}/>
    </Modal>
  );
}