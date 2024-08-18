import React from 'react';

const ConfirmationModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="modal">
      <p>Członek zespołu został dodany</p>
      <button onClick={onClose}>Zamknij</button>
    </div>
  );
};

export default ConfirmationModal;