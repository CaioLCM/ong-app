import React from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 5px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex-wrap: wrap;
`;

const Tab = styled.button`
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.9)' : 'transparent'};
  color: ${props => props.active ? '#1e3a8a' : 'white'};
  border: none;
  padding: 12px 24px;
  margin: 0 5px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '400'};
  transition: 0.3s ease;
  font-size: 1.2rem;
  
  &:hover {
    background: ${props => props.active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 1rem;
  }
`;

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'ongs', label: 'ONGs' },
    { id: 'sobre', label: 'Sobre a Pier' },
    { id: 'estudantes', label: 'Para Estudantes' },
    { id: 'empresas', label: 'Para Empresas' },
    { id: 'ranking', label: '🏆 Ranking' },
    { id: 'atividades', label: '📅 Atividades' },
    { id: 'login', label: 'Login' }
  ];

  return (
    <TabContainer>
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </Tab>
      ))}
    </TabContainer>
  );
};

export default TabNavigation;
