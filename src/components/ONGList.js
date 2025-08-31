import React from 'react';
import styled from 'styled-components';
import { ongs, getONGsByCategory } from '../config/ongs';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const ONGCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }
`;

const ONGLogo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

const ONGName = styled.h3`
  color: #1f2937;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ONGDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ONGCategory = styled.span`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 20px;
  display: inline-block;
`;

const DonateButton = styled.button`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;
  width: 100%;
  
  &:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
  }
`;

function ONGList({ onONGSelect, selectedCategory }) {
  const filteredONGs = getONGsByCategory(selectedCategory);

  return (
    <Container>
      <Grid>
        {filteredONGs.map((ong) => (
          <ONGCard key={ong.id} onClick={() => onONGSelect(ong)}>
            <ONGLogo>{ong.logo}</ONGLogo>
            <ONGName>{ong.name}</ONGName>
            <ONGCategory>{ong.category}</ONGCategory>
            <ONGDescription>{ong.description}</ONGDescription>
            <DonateButton>Doar via PIX</DonateButton>
          </ONGCard>
        ))}
      </Grid>
    </Container>
  );
}

export default ONGList;
