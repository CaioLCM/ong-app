import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QRCode from 'react-qr-code';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`;

const ONGTitle = styled.h2`
  color: #1f2937;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const QRContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QRCodeWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const PIXInfo = styled.div`
  background: #f0f9ff;
  border: 2px solid #3b82f6;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  text-align: left;
`;

const PIXInfoTitle = styled.h4`
  color: #1e40af;
  margin-bottom: 15px;
  font-size: 1.1rem;
`;

const PIXInfoItem = styled.div`
  margin-bottom: 10px;
  
  strong {
    color: #1e3a8a;
    display: inline-block;
    width: 120px;
  }
  
  span {
    color: #374151;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    word-break: break-all;
  }
`;

const CopyButton = styled.button`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  margin: 10px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
  }
`;

const Instructions = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const InstructionStep = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  span {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
    color: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: bold;
    margin-right: 15px;
  }
  
  p {
    margin: 0;
    color: #6b7280;
    font-size: 0.9rem;
  }
`;

function PIXModal({ ong, onClose }) {
  const [pixQRCode, setPixQRCode] = useState('');
  const [pixKey, setPixKey] = useState('');
  const [pixDescription, setPixDescription] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (ong) {
      setPixQRCode(ong.pixQRCode);
      setPixKey(ong.pixKey);
      setPixDescription(ong.pixDescription);
    }
  }, [ong]);

  const handleCopyQRCode = async () => {
    try {
      await navigator.clipboard.writeText(pixQRCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const handleCopyPIXKey = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  if (!ong) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        
        <ONGTitle>{ong.name}</ONGTitle>
          <PIXInfo>
            <PIXInfoTitle>Informações do PIX:</PIXInfoTitle>
            <PIXInfoItem>
              <strong>Chave PIX:</strong>
              <span>{pixKey}</span>
            </PIXInfoItem>
            <PIXInfoItem>
              <strong>Descrição:</strong>
              <span>{pixDescription}</span>
            </PIXInfoItem>
          </PIXInfo>
          
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <CopyButton onClick={handleCopyPIXKey}>
              {copied ? 'Copiado!' : 'Copiar Chave PIX'}
            </CopyButton>
          </div>
      </ModalContent>
    </ModalOverlay>
  );
}

export default PIXModal;
