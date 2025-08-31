import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  margin: 40px auto;
  max-width: 1000px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const StatsTitle = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 500;
`;

const ImpactMessage = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin-top: 30px;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const stats = [
  {
    number: "5",
    label: "Pessoas Ajudadas"
  },
  {
    number: "20+",
    label: "ONGs Parceiras"
  },
  {
    number: "R$ 100+",
    label: "Em Doações"
  },
  {
    number: "100%",
    label: "Transparência"
  }
];

function StatsSection() {
  return (
    <StatsContainer>
      <StatsTitle>Impacto das Suas Doações</StatsTitle>
      
      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>
      
      <ImpactMessage>
        Cada doação faz a diferença na vida de milhares de pessoas. 
        Sua contribuição via PIX é processada instantaneamente e 100% 
        direcionada para as causas que você escolher.
      </ImpactMessage>
    </StatsContainer>
  );
}

export default StatsSection;
