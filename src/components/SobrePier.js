import React from 'react';
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

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: white;
  padding: 20px;
  border-radius: 20px;
  margin: 20px 0;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const FeatureCard = styled.div`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(251, 191, 36, 0.1));
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 20px;
  padding: 25px;
  text-align: center;
  transition: 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h4`
  color: #1e3a8a;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const FeatureText = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.5;
`;

const SobrePier = () => {
  return (
    <Container>
      <ContentCard>
        <Title>Sobre a Pier</Title>
        
        <Text>
          A Pier é uma empresa inovadora que conecta pessoas, organizações e empresas através da tecnologia, 
          criando um ecossistema de colaboração e impacto social positivo. Nossa missão é democratizar o acesso 
          à filantropia e tornar a doação mais transparente, eficiente e gratificante.
        </Text>

        <Subtitle>Nossa História</Subtitle>
        <Text>
          Fundada com o propósito de transformar a forma como as pessoas se conectam com causas sociais, 
          a Pier nasceu da convicção de que a tecnologia pode ser uma força poderosa para o bem. 
          Ainda estamos no começo de nossa jornada, focando apenas nas causas regionais.
        </Text>

        <HighlightBox>
          🌟 Conectando mais de 20 projetos sociais com diversos doadores em Itajubá e região
        </HighlightBox>

        <Subtitle>Nossa Missão</Subtitle>
        <Text>
          Facilitar e incentivar a doação para projetos sociais, promovendo a 
          transparência, a eficiência e o impacto social. Queremos que cada pessoa possa 
          contribuir de forma significativa para causas que acredita, independentemente do valor da doação.
        </Text>

        <Grid>
          <FeatureCard>
            <FeatureIcon>🔗</FeatureIcon>
            <FeatureTitle>Conectividade</FeatureTitle>
            <FeatureText>
              Conectamos doadores diretamente com projetos sociais locais, eliminando intermediários 
              e maximizando o impacto das doações.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>📱</FeatureIcon>
            <FeatureTitle>Tecnologia</FeatureTitle>
            <FeatureText>
              Utilizamos as mais modernas tecnologias para facilitar o processo de doação 
              e garantir transparência total.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🎯</FeatureIcon>
            <FeatureTitle>Impacto</FeatureTitle>
            <FeatureText>
              Cada doação é rastreada e reportada, permitindo que os doadores vejam 
              exatamente como seu dinheiro está sendo utilizado.
            </FeatureText>
          </FeatureCard>
        </Grid>

        <Subtitle>Nossos Valores</Subtitle>
        <Text>
          <strong>Transparência:</strong> Acreditamos que a transparência é fundamental para construir confiança. 
          Todas as doações são rastreadas e reportadas de forma clara e objetiva.
        </Text>
        <Text>
          <strong>Impacto:</strong> Nosso foco está em maximizar o impacto social de cada doação, 
          garantindo que os recursos sejam utilizados de forma eficiente e efetiva.
        </Text>
        <Text>
          <strong>Inovação:</strong> Constantemente buscamos novas formas de melhorar nossa plataforma 
          e facilitar o processo de doação para todos os usuários.
        </Text>
        <Text>
          <strong>Comunidade:</strong> Acreditamos no poder da comunidade e trabalhamos para 
          fortalecer os laços entre doadores, projetos sociais e beneficiários.
        </Text>

        <Subtitle>Nossa Visão</Subtitle>
        <Text>
          Queremos ser a principal plataforma de engajamento social do Brasil, conectando 
          milhões de pessoas com causas que importam e criando um impacto social duradouro 
          em nossas comunidades.
        </Text>
      </ContentCard>
    </Container>
  );
};

export default SobrePier;
