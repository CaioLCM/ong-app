import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 25px;
  padding: 40px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Title = styled.h2`
  color: #1e3a8a;
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.h3`
  color: #1e40af;
  font-size: 1.5rem;
  margin: 25px 0 15px 0;
  border-left: 4px solid #fbbf24;
  padding-left: 15px;
`;

const Text = styled.p`
  color: #1f2937;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const RankingTabs = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  gap: 10px;
`;

const RankingTab = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)' : 'rgba(255, 255, 255, 0.8)'};
  color: ${props => props.active ? 'white' : '#1e3a8a'};
  border: none;
  padding: 15px 30px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  transition: 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }
`;

const RankingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

const RankingItem = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(251, 191, 36, 0.1));
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 20px;
  padding: 25px;
  transition: 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${props => {
      if (props.position === 1) return 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)';
      if (props.position === 2) return 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)';
      if (props.position === 3) return 'linear-gradient(135deg, #cd7f32 0%, #b8860b 100%)';
      return 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)';
    }};
    border-radius: 0 2px 2px 0;
  }
`;

const Position = styled.div`
  background: ${props => {
    if (props.position === 1) return 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)';
    if (props.position === 2) return 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)';
    if (props.position === 3) return 'linear-gradient(135deg, #cd7f32 0%, #b8860b 100%)';
    return 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)';
  }};
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 20px;
  flex-shrink: 0;
`;

const ItemContent = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h4`
  color: #1e3a8a;
  font-size: 1.3rem;
  margin: 0 0 8px 0;
  font-weight: 600;
`;

const ItemSubtitle = styled.p`
  color: #6b7280;
  font-size: 1rem;
  margin: 0 0 8px 0;
`;

const ItemStats = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1e3a8a;
  font-weight: 600;
`;

const StatIcon = styled.span`
  font-size: 1.2rem;
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: white;
  padding: 25px;
  border-radius: 20px;
  margin: 30px 0;
  text-align: center;
`;

const HighlightTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const HighlightText = styled.p`
  color: white;
  font-size: 1.1rem;
  margin-bottom: 0;
  opacity: 0.95;
`;

const Ranking = () => {
  const [activeTab, setActiveTab] = useState('empresas');

  const empresasRanking = [
    {
      position: 1,
      name: "TechCorp Solutions",
      description: "Empresa de tecnologia",
      doacoes: "R$ 150.000",
      ongsApoiadas: 12,
      impacto: "15.000+ pessoas beneficiadas"
    },
    {
      position: 2,
      name: "GreenEnergy Ltda",
      description: "Energia sustentável",
      doacoes: "R$ 120.000",
      ongsApoiadas: 8,
      impacto: "8.500+ pessoas beneficiadas"
    },
    {
      position: 3,
      name: "EduTech Brasil",
      description: "Educação digital",
      doacoes: "R$ 95.000",
      ongsApoiadas: 10,
      impacto: "12.000+ pessoas beneficiadas"
    },
    {
      position: 4,
      name: "HealthCare Plus",
      description: "Saúde e bem-estar",
      doacoes: "R$ 78.000",
      ongsApoiadas: 6,
      impacto: "6.200+ pessoas beneficiadas"
    },
    {
      position: 5,
      name: "EcoSolutions",
      description: "Meio ambiente",
      doacoes: "R$ 65.000",
      ongsApoiadas: 7,
      impacto: "5.800+ pessoas beneficiadas"
    }
  ];

  const pessoasRanking = [
    {
      position: 1,
      name: "Maria Silva",
      description: "Advogada",
      doacoes: "R$ 25.000",
      ongsApoiadas: 8,
      impacto: "2.500+ pessoas beneficiadas"
    },
    {
      position: 2,
      name: "João Santos",
      description: "Médico",
      doacoes: "R$ 22.000",
      ongsApoiadas: 6,
      impacto: "2.100+ pessoas beneficiadas"
    },
    {
      position: 3,
      name: "Ana Costa",
      description: "Professora",
      doacoes: "R$ 18.000",
      ongsApoiadas: 5,
      impacto: "1.800+ pessoas beneficiadas"
    },
    {
      position: 4,
      name: "Carlos Lima",
      description: "Engenheiro",
      doacoes: "R$ 15.000",
      ongsApoiadas: 4,
      impacto: "1.500+ pessoas beneficiadas"
    },
    {
      position: 5,
      name: "Lucia Ferreira",
      description: "Arquiteta",
      doacoes: "R$ 12.000",
      ongsApoiadas: 3,
      impacto: "1.200+ pessoas beneficiadas"
    }
  ];

  const renderRankingList = (data) => (
    <RankingList>
      {data.map((item) => (
        <RankingItem key={item.position} position={item.position}>
          <Position position={item.position}>
            {item.position === 1 ? '🥇' : item.position === 2 ? '🥈' : item.position === 3 ? '🥉' : item.position}
          </Position>
          <ItemContent>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemSubtitle>{item.description}</ItemSubtitle>
            <ItemStats>
              <Stat>
                <StatIcon>💰</StatIcon>
                {item.doacoes}
              </Stat>
              <Stat>
                <StatIcon>🏢</StatIcon>
                {item.ongsApoiadas} ONGs
              </Stat>
              <Stat>
                <StatIcon>🌟</StatIcon>
                {item.impacto}
              </Stat>
            </ItemStats>
          </ItemContent>
        </RankingItem>
      ))}
    </RankingList>
  );

  return (
    <Container>
      <ContentCard>
        <Title>🏆 Ranking de Colaboradores</Title>
        
        <Text>
          Reconhecemos e celebramos os maiores colaboradores da plataforma Pier. 
          Este ranking destaca empresas e pessoas que mais contribuíram para o impacto social 
          em Itajubá e região.
        </Text>

        <HighlightBox>
          <HighlightTitle>🎯 Impacto Coletivo</HighlightTitle>
          <HighlightText>
            Juntos, nossos colaboradores já beneficiaram mais de <strong>50.000 pessoas</strong> 
            e apoiaram <strong>45+ ONGs</strong> em toda a região!
          </HighlightText>
        </HighlightBox>

        <RankingTabs>
          <RankingTab 
            active={activeTab === 'empresas'} 
            onClick={() => setActiveTab('empresas')}
          >
            🏢 Ranking de Empresas
          </RankingTab>
          <RankingTab 
            active={activeTab === 'pessoas'} 
            onClick={() => setActiveTab('pessoas')}
          >
            👥 Ranking de Pessoas
          </RankingTab>
        </RankingTabs>

        {activeTab === 'empresas' && (
          <>
            <Subtitle>🏢 Top 5 Empresas Colaboradoras</Subtitle>
            <Text>
              Empresas que demonstram compromisso com a responsabilidade social corporativa 
              e fazem a diferença na comunidade através de doações e parcerias.
            </Text>
            {renderRankingList(empresasRanking)}
          </>
        )}

        {activeTab === 'pessoas' && (
          <>
            <Subtitle>👥 Top 5 Pessoas Colaboradoras</Subtitle>
            <Text>
              Indivíduos que dedicam tempo e recursos para causas sociais, 
              inspirando outros a fazerem o bem e criando um impacto positivo na sociedade.
            </Text>
            {renderRankingList(pessoasRanking)}
          </>
        )}

        <Subtitle>📊 Como Funciona o Ranking</Subtitle>
        <Text>
          <strong>Pontuação:</strong> Baseada no valor total das doações, número de ONGs apoiadas 
          e impacto social gerado.
        </Text>
        <Text>
          <strong>Atualização:</strong> O ranking é atualizado mensalmente para refletir 
          as contribuições mais recentes.
        </Text>
        <Text>
          <strong>Reconhecimento:</strong> Os top colaboradores recebem certificados especiais 
          e participam de eventos exclusivos da Pier.
        </Text>
      </ContentCard>
    </Container>
  );
};

export default Ranking;
