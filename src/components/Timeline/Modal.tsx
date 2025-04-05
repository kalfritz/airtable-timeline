import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TEST_IDS } from '../../constants/testIds';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
  initialName: string;
}

interface ModalButtonProps {
  variant?: 'primary' | 'secondary';
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 32px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHeader = styled.h2`
  margin-bottom: 24px;
  color: var(--airtable-blue);
  font-size: 1.125rem;
  font-weight: 600;
`;

const ModalInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 24px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.875rem;
  outline: none;
  
  &:focus {
    border-color: var(--airtable-blue);
    box-shadow: 0 0 0 2px rgba(38, 132, 255, 0.2);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  width: 100%;
`;

const ModalButton = styled.button<ModalButtonProps>`
  background-color: ${props => props.variant === 'secondary' ? 'white' : 'var(--airtable-blue)'};
  color: ${props => props.variant === 'secondary' ? 'var(--airtable-text)' : 'white'};
  padding: 10px 16px;
  border: ${props => props.variant === 'secondary' ? '1px solid #ddd' : 'none'};
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  min-width: 80px;

  &:hover {
    background-color: ${props => props.variant === 'secondary' ? '#f5f5f5' : '#0056b3'};
  }
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave, initialName }) => {
  const [name, setName] = useState(initialName);

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(name);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return isOpen ? (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>Edit Item Name</ModalHeader>
        <ModalInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter item name"
          autoFocus
          data-testid={TEST_IDS.modalInput}
        />
        <ButtonGroup>
          <ModalButton variant="secondary" onClick={onClose} data-testid={TEST_IDS.modalCancel}>
            Cancel
          </ModalButton>
          <ModalButton onClick={handleSave} data-testid={TEST_IDS.modalSave}>
            Save
          </ModalButton>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  ) : null;
};

export default Modal; 