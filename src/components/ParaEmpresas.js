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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

const ReportSection = styled.div`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  padding: 30px;
  border-radius: 20px;
  margin: 30px 0;
`;

const ReportTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const ReportForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 800px;
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

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`;

const GenerateButton = styled.button`
  background: white;
  color: #1e3a8a;
  border: none;
  padding: 15px 30px;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  grid-column: 1 / -1;
  max-width: 300px;
  margin: 0 auto;
  
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
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
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

const ReportPreview = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
`;

const ReportPreviewTitle = styled.h4`
  color: white;
  margin-bottom: 15px;
  text-align: center;
`;

const ReportPreviewContent = styled.div`
  background: rgba(255, 255, 255, 0.9);
  color: #1f2937;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const ParaEmpresas = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    cnpj: '',
    responsavel: '',
    email: '',
    telefone: '',
    periodo: '',
    ongs: [],
    valorTotal: '',
    descricao: ''
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const generateReport = () => {
    alert('Relatório gerado com sucesso! O download começará em instantes.');
  };

  return (
    <Container>
      <ContentCard>
        <Title>Para Empresas</Title>
        
        <Text>
          Como empresa, você tem acesso a ferramentas exclusivas para gerenciar suas colaborações com projetos sociais, 
          gerar relatórios detalhados e demonstrar seu compromisso com a responsabilidade social corporativa.
        </Text>

        <Subtitle>Benefícios para Empresas</Subtitle>
        
        <BenefitsGrid>
          <BenefitCard>
            <BenefitIcon>📊</BenefitIcon>
            <BenefitTitle>Relatórios Detalhados</BenefitTitle>
            <BenefitText>
              Acesse relatórios completos de todas as suas colaborações, incluindo impacto social, 
              transparência fiscal e métricas de engajamento.
            </BenefitText>
          </BenefitCard>

          <BenefitCard>
            <BenefitIcon>🏆</BenefitIcon>
            <BenefitTitle>Certificação de Impacto</BenefitTitle>
            <BenefitText>
              Receba certificados oficiais que comprovam seu compromisso com a responsabilidade 
              social e podem ser usados em relatórios anuais.
            </BenefitText>
          </BenefitCard>

          <BenefitCard>
            <BenefitIcon>💼</BenefitIcon>
            <BenefitTitle>Gestão Corporativa</BenefitTitle>
            <BenefitText>
              Gerencie múltiplas colaborações, funcionários e departamentos em uma única 
              plataforma integrada.
            </BenefitText>
          </BenefitCard>

          <BenefitCard>
            <BenefitIcon>📈</BenefitIcon>
            <BenefitTitle>Métricas de Performance</BenefitTitle>
            <BenefitText>
              Acompanhe o ROI social das suas doações e o impacto real das suas ações 
              na comunidade.
            </BenefitText>
          </BenefitCard>

          <BenefitCard>
            <BenefitIcon>🤝</BenefitIcon>
            <BenefitTitle>Networking Corporativo</BenefitTitle>
            <BenefitText>
              Conecte-se com outras empresas comprometidas com a responsabilidade social 
              e participe de eventos exclusivos.
            </BenefitText>
          </BenefitCard>

          <BenefitCard>
            <BenefitIcon>🌱</BenefitIcon>
            <BenefitTitle>Sustentabilidade</BenefitTitle>
            <BenefitText>
              Demonstre seu compromisso com os Objetivos de Desenvolvimento Sustentável 
              da ONU através de ações concretas.
            </BenefitText>
          </BenefitCard>
        </BenefitsGrid>

        <Subtitle>Estatísticas das Empresas</Subtitle>
        
        <StatsGrid>
          <StatCard>
            <StatNumber>10 +</StatNumber>
            <StatLabel>Empresas Parceiras</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>R$ 100 +</StatNumber>
            <StatLabel>Em Doações</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>2 +</StatNumber>
            <StatLabel>Relatórios Gerados</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>100%</StatNumber>
            <StatLabel>Satisfação</StatLabel>
          </StatCard>
        </StatsGrid>

        <ReportSection>
          <ReportTitle>📊 Gerar Relatório de Colaboração</ReportTitle>
          <Text style={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>
            Preencha os dados abaixo para gerar um relatório completo das suas colaborações com projetos sociais. 
            O documento será personalizado com sua marca e dados específicos.
          </Text>
          
          <ReportForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Nome da Empresa</Label>
              <Input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleInputChange}
                required
                placeholder="Nome da sua empresa"
              />
            </FormGroup>

            <FormGroup>
              <Label>CNPJ</Label>
              <Input
                type="text"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleInputChange}
                required
                placeholder="00.000.000/0000-00"
              />
            </FormGroup>

            <FormGroup>
              <Label>Responsável</Label>
              <Input
                type="text"
                name="responsavel"
                value={formData.responsavel}
                onChange={handleInputChange}
                required
                placeholder="Nome do responsável"
              />
            </FormGroup>

            <FormGroup>
              <Label>Email Corporativo</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="contato@empresa.com"
              />
            </FormGroup>

            <FormGroup>
              <Label>Telefone</Label>
              <Input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                required
                placeholder="(11) 99999-9999"
              />
            </FormGroup>

            <FormGroup>
              <Label>Período do Relatório</Label>
              <Select
                name="periodo"
                value={formData.periodo}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecione o período</option>
                <option value="trimestre">Último Trimestre</option>
                <option value="semestre">Último Semestre</option>
                <option value="ano">Último Ano</option>
              </Select>
            </FormGroup>
            <FormGroup style={{ gridColumn: '1 / -1' }}>
              <Label>Descrição das Ações</Label>
              <TextArea
                name="descricao"
                value={formData.descricao}
                onChange={handleInputChange}
                placeholder="Descreva as principais ações e projetos apoiados..."
              />
            </FormGroup>

            <GenerateButton type="submit">
              📊 Gerar Relatório
            </GenerateButton>
          </ReportForm>

          {showPreview && (
            <ReportPreview>
              <ReportPreviewTitle>📋 Prévia do Relatório</ReportPreviewTitle>
              <ReportPreviewContent>
                <strong>RELATÓRIO DE COLABORAÇÃO SOCIAL</strong><br/><br/>
                <strong>Empresa:</strong> {formData.empresa}<br/>
                <strong>CNPJ:</strong> {formData.cnpj}<br/>
                <strong>Responsável:</strong> {formData.responsavel}<br/>
                <strong>Período:</strong> {formData.periodo}<br/>
                <strong>Valor Total:</strong> {formData.valorTotal}<br/><br/>
                <strong>Projetos Colaborados:</strong> {formData.ongs}<br/><br/>
                <strong>Descrição das Ações:</strong><br/>
                {formData.descricao}<br/><br/>
                <strong>Data de Geração:</strong> {new Date().toLocaleDateString('pt-BR')}<br/>
                <strong>Relatório gerado pela plataforma Pier</strong>
              </ReportPreviewContent>
              <GenerateButton 
                onClick={generateReport}
                style={{ marginTop: '20px' }}
              >
                📥 Baixar Relatório PDF
              </GenerateButton>
            </ReportPreview>
          )}
        </ReportSection>

        <Subtitle>Como Funciona</Subtitle>
        <Text>
          <strong>1. Cadastro da Empresa:</strong> Faça o cadastro da sua empresa na plataforma Pier.
        </Text>
        <Text>
          <strong>2. Realize Colaborações:</strong> Faça doações para projetos sociais através da plataforma.
        </Text>
        <Text>
          <strong>3. Gere Relatórios:</strong> Use o formulário acima para gerar relatórios personalizados.
        </Text>
      </ContentCard>
    </Container>
  );
};

export default ParaEmpresas;
