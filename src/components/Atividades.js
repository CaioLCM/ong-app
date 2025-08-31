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

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  gap: 10px;
  flex-wrap: wrap;
`;

const FilterTab = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)' : 'rgba(255, 255, 255, 0.8)'};
  color: ${props => props.active ? 'white' : '#1e3a8a'};
  border: none;
  padding: 12px 24px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Timeline = styled.div`
  position: relative;
  margin: 40px 0;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(135deg, #3b82f6 0%, #fbbf24 100%);
    transform: translateX(-50%);
    border-radius: 2px;
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  
  &:nth-child(odd) {
    flex-direction: row;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background: ${props => {
    if (props.type === 'evento') return 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)';
    if (props.type === 'noticia') return 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)';
    if (props.type === 'voluntariado') return 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    return 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)';
  }};
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  border: 4px solid white;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
  
  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  width: 45%;
  position: relative;
  transition: 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 40px;
  }
  
  ${props => props.side === 'left' && `
    margin-right: auto;
    
    @media (max-width: 768px) {
      margin-right: 0;
    }
  `}
  
  ${props => props.side === 'right' && `
    margin-left: auto;
    
    @media (max-width: 768px) {
      margin-left: 0;
    }
  `}
`;

const TimelineDate = styled.div`
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 15px;
`;

const TimelineTitle = styled.h4`
  color: #1e3a8a;
  font-size: 1.3rem;
  margin: 0 0 10px 0;
  font-weight: 600;
`;

const TimelineDescription = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 15px 0;
`;

const TimelineMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #1e3a8a;
  font-size: 0.9rem;
  font-weight: 500;
`;

const MetaIcon = styled.span`
  font-size: 1rem;
`;

const TimelineType = styled.div`
  background: ${props => {
    if (props.type === 'evento') return 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)';
    if (props.type === 'noticia') return 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)';
    if (props.type === 'voluntariado') return 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    return 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)';
  }};
  color: white;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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

const Atividades = () => {
  const [activeFilter, setActiveFilter] = useState('todas');

  const atividades = [
    {
      id: 1,
      type: 'evento',
      title: 'Feira de Voluntariado 2024',
      description: 'Grande feira anual para conectar voluntários com ONGs. Mais de 50 organizações participarão com stands informativos e oportunidades de engajamento.',
      date: '15 de Dezembro, 2024',
      ong: 'Agência arte & ação cultural',
      local: 'Praça Central de Itajubá',
      horario: '09:00 - 18:00',
      vagas: 'Ilimitadas'
    },
    {
      id: 2,
      type: 'noticia',
      title: 'Nova ONG de Proteção Animal Chega à Região',
      description: 'A "Patas & Corações" iniciou suas atividades focando no resgate e adoção de animais abandonados. Já resgatou mais de 100 animais em seu primeiro mês.',
      date: '10 de Dezembro, 2024',
      ong: 'Patas & Corações',
      impacto: '100+ animais resgatados',
      status: 'Ativo'
    },
    {
      id: 3,
      type: 'voluntariado',
      title: 'Campanha de Doação de Sangue',
      description: 'Campanha emergencial para aumentar o estoque de sangue nos hospitais da região. Voluntários receberão certificados e brindes especiais.',
      date: '8 de Dezembro, 2024',
      ong: 'Associação de educação saúde e cultura AESC',
      local: 'Hemocentro Regional',
      horario: '08:00 - 17:00',
      vagas: '50 pessoas'
    },
    {
      id: 4,
      type: 'evento',
      title: 'Workshop de Sustentabilidade',
      description: 'Workshop prático sobre reciclagem, compostagem e práticas sustentáveis para o dia a dia. Inclui material didático e certificado.',
      date: '5 de Dezembro, 2024',
      ong: 'Associação das antigas alunas da providência',
      local: 'Centro de Educação Ambiental',
      horario: '14:00 - 17:00',
      vagas: '30 pessoas'
    },
    {
      id: 5,
      type: 'noticia',
      title: 'Projeto de Educação Musical Beneficia 200 Crianças',
      description: 'O projeto "Música para Todos" da ONG Associação anjos da luz completou seu primeiro ano com sucesso, beneficiando crianças de escolas públicas.',
      date: '3 de Dezembro, 2024',
      ong: 'Associação anjos da luz',
      impacto: '200 crianças beneficiadas',
      status: 'Concluído'
    },
    {
      id: 6,
      type: 'voluntariado',
      title: 'Construção de Horta Comunitária',
      description: 'Projeto para construir uma horta comunitária que beneficiará famílias em situação de vulnerabilidade. Inclui treinamento em agricultura urbana.',
      date: '1 de Dezembro, 2024',
      ong: 'Associação de integração social de Itajubá',
      local: 'Bairro São José',
      horario: '08:00 - 12:00',
      vagas: '20 pessoas'
    }
  ];

  const filteredAtividades = activeFilter === 'todas' 
    ? atividades 
    : atividades.filter(item => item.type === activeFilter);

  const renderTimelineItem = (item, index) => {
    const side = index % 2 === 0 ? 'left' : 'right';
    
    return (
      <TimelineItem key={item.id}>
        <TimelineDot type={item.type} />
        <TimelineContent side={side}>
          <TimelineDate>{item.date}</TimelineDate>
          <TimelineType type={item.type}>
            {item.type === 'evento' ? '🎉 Evento' : 
             item.type === 'noticia' ? '📰 Notícia' : 
             item.type === 'voluntariado' ? '🤝 Voluntariado' : '📋 Atividade'}
          </TimelineType>
          <TimelineTitle>{item.title}</TimelineTitle>
          <TimelineDescription>{item.description}</TimelineDescription>
          <TimelineMeta>
            <MetaItem>
              <MetaIcon>🏢</MetaIcon>
              {item.ong}
            </MetaItem>
            {item.local && (
              <MetaItem>
                <MetaIcon>📍</MetaIcon>
                {item.local}
              </MetaItem>
            )}
            {item.horario && (
              <MetaItem>
                <MetaIcon>🕒</MetaIcon>
                {item.horario}
              </MetaItem>
            )}
            {item.vagas && (
              <MetaItem>
                <MetaIcon>👥</MetaIcon>
                {item.vagas}
              </MetaItem>
            )}
            {item.impacto && (
              <MetaItem>
                <MetaIcon>🌟</MetaIcon>
                {item.impacto}
              </MetaItem>
            )}
          </TimelineMeta>
        </TimelineContent>
      </TimelineItem>
    );
  };

  return (
    <Container>
      <ContentCard>
        <Title>📅 Atividades e Eventos das ONGs</Title>
        
        <Text>
          Fique por dentro de todas as atividades, eventos e notícias das ONGs parceiras da Pier. 
          Aqui você encontra oportunidades de voluntariado, eventos para participar e as últimas 
          novidades do terceiro setor em Itajubá e região.
        </Text>

        <HighlightBox>
          <HighlightTitle>🎯 Participe e Faça a Diferença</HighlightTitle>
          <HighlightText>
            Junte-se às <strong>6 ONGs parceiras</strong> em suas atividades e ajude a transformar 
            a vida de milhares de pessoas na nossa comunidade!
          </HighlightText>
        </HighlightBox>

        <FilterTabs>
          <FilterTab 
            active={activeFilter === 'todas'} 
            onClick={() => setActiveFilter('todas')}
          >
            📋 Todas as Atividades
          </FilterTab>
          <FilterTab 
            active={activeFilter === 'evento'} 
            onClick={() => setActiveFilter('evento')}
          >
            🎉 Eventos
          </FilterTab>
          <FilterTab 
            active={activeFilter === 'noticia'} 
            onClick={() => setActiveFilter('noticia')}
          >
            📰 Notícias
          </FilterTab>
          <FilterTab 
            active={activeFilter === 'voluntariado'} 
            onClick={() => setActiveFilter('voluntariado')}
          >
            🤝 Voluntariado
          </FilterTab>
        </FilterTabs>

        <Timeline>
          {filteredAtividades.map((item, index) => renderTimelineItem(item, index))}
        </Timeline>

        <Subtitle>📊 Estatísticas das Atividades</Subtitle>
        <Text>
          <strong>Total de Atividades:</strong> {atividades.length} atividades disponíveis
        </Text>
        <Text>
          <strong>Eventos:</strong> {atividades.filter(item => item.type === 'evento').length} eventos programados
        </Text>
        <Text>
          <strong>Oportunidades de Voluntariado:</strong> {atividades.filter(item => item.type === 'voluntariado').length} vagas disponíveis
        </Text>
        <Text>
          <strong>Notícias:</strong> {atividades.filter(item => item.type === 'noticia').length} notícias recentes
        </Text>

        <Subtitle>💡 Como Participar</Subtitle>
        <Text>
          <strong>1. Escolha uma atividade:</strong> Navegue pela timeline e encontre algo que te interesse.
        </Text>
        <Text>
          <strong>2. Entre em contato:</strong> Use as informações da ONG para se inscrever ou obter mais detalhes.
        </Text>
        <Text>
          <strong>3. Participe:</strong> Junte-se à atividade e faça a diferença na comunidade.
        </Text>
        <Text>
          <strong>4. Compartilhe:</strong> Conte sua experiência e inspire outros a participarem também.
        </Text>
      </ContentCard>
    </Container>
  );
};

export default Atividades;
