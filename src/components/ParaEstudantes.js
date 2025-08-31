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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin: 30px 0;
`;

const BenefitCard = styled.div`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(251, 191, 36, 0.1));
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 20px;
  padding: 25px;
  text-align: center;
  transition: 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: #1e3a8a;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  }
`;

const BenefitIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 15px;
`;

const BenefitTitle = styled.h4`
  color: #1e3a8a;
  font-size: 1.2rem;
  margin-bottom: 12px;
  font-weight: 600;
`;

const BenefitText = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.5;
`;

const CertificateSection = styled.div`
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: white;
  padding: 30px;
  border-radius: 20px;
  margin: 30px 0;
  text-align: center;
`;

const CertificateTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const CertificateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: white;
  font-weight: 600;
  text-align: left;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`;

const Select = styled.select`
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`;

const GenerateButton = styled.button`
  background: white;
  color: #f59e0b;
  border: none;
  padding: 15px 30px;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  padding: 25px;
  border-radius: 20px;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

const ParaEstudantes = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    instituicao: '',
    curso: '',
    ong: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Certificado gerado com sucesso! Verifique seu email.');
  };

  return (
    <Container>
      <ContentCard>
        <Title>Para Estudantes</Title>
        
        <Text>
          Como estudante, você tem acesso a benefícios exclusivos ao colaborar com ONGs através da plataforma Pier. 
          Além de fazer o bem, você ganha certificados reconhecidos e desenvolve habilidades importantes para seu futuro.
        </Text>

        <Subtitle>Benefícios Exclusivos</Subtitle>
        
        <BenefitsGrid>
          <BenefitCard>
            <BenefitIcon>🎓</BenefitIcon>
            <BenefitTitle>Certificados Reconhecidos</BenefitTitle>
            <BenefitText>
              Receba certificados oficiais da Pier e das ONGs para comprovar suas horas de voluntariado 
              e colaboração social.
            </BenefitText>
          </BenefitCard>

          <BenefitCard>
            <BenefitIcon>💼</BenefitIcon>
            <BenefitTitle>Desenvolvimento Profissional</BenefitTitle>
            <BenefitText>
              Desenvolva habilidades como liderança, trabalho em equipe, comunicação e gestão de projetos 
              através do voluntariado.
            </BenefitText>
          </BenefitCard>

          <BenefitCard>
            <BenefitIcon>🌍</BenefitIcon>
            <BenefitTitle>Impacto Social</BenefitTitle>
            <BenefitText>
              Contribua diretamente para causas importantes e veja o impacto real de suas ações 
              na comunidade local.
            </BenefitText>
          </BenefitCard>

          <BenefitCard>
            <BenefitIcon>🤝</BenefitIcon>
            <BenefitTitle>Networking</BenefitTitle>
            <BenefitText>
              Conecte-se com outros estudantes, profissionais e membros da comunidade que compartilham 
              seus valores e interesses.
            </BenefitText>
          </BenefitCard>

          <BenefitCard>
            <BenefitIcon>📚</BenefitIcon>
            <BenefitTitle>Reconhecimento Acadêmico</BenefitTitle>
            <BenefitText>
              Muitas instituições de ensino reconhecem o voluntariado como atividade extracurricular 
              válida para créditos.
            </BenefitText>
          </BenefitCard>

          <BenefitCard>
            <BenefitIcon>🌟</BenefitIcon>
            <BenefitTitle>Destaque no Currículo</BenefitTitle>
            <BenefitText>
              Diferencie-se no mercado de trabalho com experiências reais de impacto social 
              e voluntariado.
            </BenefitText>
          </BenefitCard>
        </BenefitsGrid>

        <Subtitle>Estatísticas dos Estudantes</Subtitle>
        
        <StatsGrid>
          <StatCard>
            <StatNumber>2.500+</StatNumber>
            <StatLabel>Estudantes Ativos</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>15.000+</StatNumber>
            <StatLabel>Horas de Voluntariado</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>500+</StatNumber>
            <StatLabel>Certificados Emitidos</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>50+</StatNumber>
            <StatLabel>Instituições Parceiras</StatLabel>
          </StatCard>
        </StatsGrid>

        <CertificateSection>
          <CertificateTitle>🎖️ Gerar Certificado de Voluntariado</CertificateTitle>
          <Text style={{ color: 'white', marginBottom: '20px' }}>
            Preencha os dados abaixo para gerar, caso válido, seu certificado de voluntariado. 
            O documento será enviado para seu email em até 24 horas.
          </Text>
          
          <CertificateForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label>CPF</Label>
              <Input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                placeholder="Digite o seu CPF"
              />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="seu@email.com"
              />
            </FormGroup>

            <FormGroup>
              <Label>Instituição de Ensino</Label>
              <Input
                type="text"
                name="instituicao"
                value={formData.instituicao}
                onChange={handleInputChange}
                required
                placeholder="Nome da sua instituição"
              />
            </FormGroup>

            <FormGroup>
              <Label>ONG</Label>
              <Input
                type="text"
                name="curso"
                value={formData.curso}
                onChange={handleInputChange}
                required
                placeholder="ONG na qual você participou da atividade"
              />
            </FormGroup>

            <GenerateButton type="submit">
              🎖️ Gerar Certificado
            </GenerateButton>
          </CertificateForm>
        </CertificateSection>

        <Subtitle>Como Funciona</Subtitle>
        <Text>
          <strong>1. Participe de um evento:</strong> Veja os eventos disponíveis e participe.
        </Text>
        <Text>
          <strong>2. Solicite o certificado:</strong> Use o formulário acima para solicitar seu certificado oficial (sua participação passará por uma validação).
        </Text>
        <Text>
          <strong>3. Receba por email:</strong> O certificado, caso válido, será enviado para seu email em até 24 horas.
        </Text>
      </ContentCard>
    </Container>
  );
};

export default ParaEstudantes;
