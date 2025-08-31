import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 25px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Title = styled.h2`
  color: #1e3a8a;
  font-size: 1.8rem;
  margin-bottom: 30px;
  text-align: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  color: #6b7280;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #1f2937;
  font-weight: 600;
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 15px 16px;
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 10px;
  font-size: 1rem;
  background: white;
  transition: 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #1e3a8a;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
  
  &::placeholder {
    color: #6b7280;
    opacity: 0.7;
  }
`;

const Select = styled.select`
  padding: 15px 16px;
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 10px;
  font-size: 1rem;
  background: white;
  transition: 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #1e3a8a;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const LoginButton = styled.button`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  margin-top: 10px;
  
  &:hover {
    background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(59, 130, 246, 0.3);
  }
  
  span {
    padding: 0 20px;
    color: #6b7280;
    font-size: 1rem;
  }
`;

const SocialButton = styled.button`
  background: white;
  color: #1f2937;
  border: 2px solid rgba(59, 130, 246, 0.3);
  padding: 15px 20px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  &:hover {
    border-color: #1e3a8a;
    background: rgba(59, 130, 246, 0.1);
    transform: translateY(-2px);
  }
`;

const ForgotPassword = styled.button`
  color: #1e3a8a;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  margin-top: 20px;
  display: block;
  transition: 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  
  &:hover {
    color: #1e40af;
    text-decoration: underline;
  }
`;

const SignUpLink = styled.div`
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(59, 130, 246, 0.3);
  
  p {
    color: #6b7280;
    margin-bottom: 15px;
  }
  
  button {
    background: none;
    border: none;
    color: #1e3a8a;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s ease;
    cursor: pointer;
    font-size: 1rem;
    padding: 0;
    font-family: inherit;
    
    &:hover {
      color: #1e40af;
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.div`
  background: #fee2e2;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 1rem;
  border: 1px solid #fecaca;
  text-align: center;
`;

const SuccessMessage = styled.div`
  background: #dcfce7;
  color: #16a34a;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 1rem;
  border: 1px solid #bbf7d0;
  text-align: center;
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    tipoUsuario: 'pessoa'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (!formData.email || !formData.senha) {
        throw new Error('Por favor, preencha todos os campos obrigatórios.');
      }

      if (formData.email.length < 5) {
        throw new Error('Email deve ter pelo menos 5 caracteres.');
      }

      if (formData.senha.length < 6) {
        throw new Error('Senha deve ter pelo menos 6 caracteres.');
      }

      setSuccess(`Login realizado com sucesso! Bem-vindo(a) de volta!`);
      
    } catch (err) {
      setError(err.message || 'Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    setError('');
    setSuccess(`Tentando fazer login com ${provider}...`);
  };

  return (
    <Container>
      <LoginCard>
        <Title>Entrar na Pier</Title>
        <Subtitle>
          Acesse sua conta para gerenciar doações, gerar relatórios e acompanhar o impacto social
        </Subtitle>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Tipo de Usuário</Label>
            <Select
              name="tipoUsuario"
              value={formData.tipoUsuario}
              onChange={handleInputChange}
            >
              <option value="pessoa">Pessoa Física</option>
              <option value="empresa">Empresa</option>
              <option value="ong">ONG</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="seu@email.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Senha</Label>
            <Input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleInputChange}
              placeholder="Digite sua senha"
              required
            />
          </FormGroup>

          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </LoginButton>
        </Form>

        <ForgotPassword onClick={() => alert('Funcionalidade em desenvolvimento')}>
          Esqueceu sua senha?
        </ForgotPassword>

        <Divider>
          <span>ou</span>
        </Divider>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <SocialButton onClick={() => handleSocialLogin('Google')}>
            <span>🔍</span>
            Continuar com Google
          </SocialButton>
          
          <SocialButton onClick={() => handleSocialLogin('Facebook')}>
            <span>📘</span>
            Continuar com Facebook
          </SocialButton>
          
          <SocialButton onClick={() => handleSocialLogin('LinkedIn')}>
            <span>💼</span>
            Continuar com LinkedIn
          </SocialButton>
        </div>

        <SignUpLink>
          <p>Não tem uma conta?</p>
          <button onClick={() => alert('Funcionalidade em desenvolvimento')}>
            Cadastre-se gratuitamente
          </button>
        </SignUpLink>
      </LoginCard>
    </Container>
  );
};

export default Login;
