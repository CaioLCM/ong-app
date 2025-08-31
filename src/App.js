import React, { useState } from 'react';
import styled from 'styled-components';
import ONGList from './components/ONGList';
import PIXModal from './components/PIXModal';
import CategoryFilter from './components/CategoryFilter';
import StatsSection from './components/StatsSection';
import TabNavigation from './components/TabNavigation';
import SobrePier from './components/SobrePier';
import ParaEstudantes from './components/ParaEstudantes';
import ParaEmpresas from './components/ParaEmpresas';
import Ranking from './components/Ranking';
import Atividades from './components/Atividades';
import Login from './components/Login';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const Subtitle = styled.p`
  color: rgba(255,255,255,0.9);
  font-size: 1.2rem;
  margin: 0;
`;

const PierLogo = styled.div`
  background: linear-gradient(135deg, #3b82f6 0%, #fbbf24 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: none;
`;

const ContentArea = styled.div`
  min-height: 400px;
`;

function App() {
  const [selectedONG, setSelectedONG] = useState(null);
  const [showPIXModal, setShowPIXModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState('ongs');

  const handleONGSelect = (ong) => {
    setSelectedONG(ong);
    setShowPIXModal(true);
  };

  const handleCloseModal = () => {
    setShowPIXModal(false);
    setSelectedONG(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Resetar categoria quando mudar de aba
    if (tabId !== 'ongs') {
      setSelectedCategory(null);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'ongs':
        return (
          <>
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
            
            <ONGList 
              onONGSelect={handleONGSelect}
              selectedCategory={selectedCategory}
            />
            
            <StatsSection />
          </>
        );
      case 'sobre':
        return <SobrePier />;
      case 'estudantes':
        return <ParaEstudantes />;
      case 'empresas':
        return <ParaEmpresas />;
      case 'ranking':
        return <Ranking />;
      case 'atividades':
        return <Atividades />;
      case 'login':
        return <Login />;
      default:
        return (
          <>
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
            
            <ONGList 
              onONGSelect={handleONGSelect}
              selectedCategory={selectedCategory}
            />
            
            <StatsSection />
          </>
        );
    }
  };

  return (
    <AppContainer>
      <Header>
        <PierLogo>Pier</PierLogo>
        <Title>Colabora com as ONGs de Itajubá e <br></br>tenha acesso a benefícios exclusivos!</Title>
        <Subtitle>Faça sua doação via PIX e ajude quem precisa</Subtitle>
      </Header>
      
      <TabNavigation 
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      
      <ContentArea>
        {renderContent()}
      </ContentArea>
      
      {showPIXModal && (
        <PIXModal
          ong={selectedONG}
          onClose={handleCloseModal}
        />
      )}
    </AppContainer>
  );
}

export default App;
