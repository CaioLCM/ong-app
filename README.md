# 🚀 Pier - Plataforma de Colaboração Social

Uma plataforma inovadora que conecta pessoas, organizações e empresas através da tecnologia, criando um ecossistema de colaboração e impacto social positivo em Itajubá e região.

## ✨ Funcionalidades Principais

### 🏠 **ONGs e Doações**
- Lista completa de ONGs organizadas por categoria
- Sistema de doação via PIX integrado
- Filtros por categoria (Proteção Animal, Educação, Meio Ambiente, Saúde, Habitação, Esporte)
- Estatísticas em tempo real das doações

### 🏢 **Sobre a Pier**
- Informações detalhadas sobre a empresa
- História, missão, valores e visão
- Destaque para o impacto social gerado
- Apresentação dos diferenciais da plataforma

### 🎓 **Para Estudantes**
- Benefícios exclusivos para estudantes
- Sistema de geração de certificados de voluntariado
- Desenvolvimento profissional através do voluntariado
- Estatísticas de estudantes ativos na plataforma
- Formulário para solicitação de certificados

### 💼 **Para Empresas**
- Ferramentas exclusivas para gestão corporativa
- Geração de relatórios detalhados de colaboração
- Certificação de impacto social
- Métricas de performance e ROI social
- Formulário para geração de relatórios personalizados

### 🔐 **Sistema de Login**
- Autenticação por email e senha
- Suporte a diferentes tipos de usuário (Pessoa Física, Empresa, ONG)
- Login social (Google, Facebook, LinkedIn)
- Recuperação de senha
- Cadastro de novos usuários

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React.js
- **Estilização**: Styled Components
- **Design System**: Tema personalizado com cores e componentes reutilizáveis
- **Responsividade**: Design mobile-first com breakpoints otimizados
- **Acessibilidade**: Componentes semânticos e navegação por teclado

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre na pasta do projeto
cd ong-pix-app

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm start
```

### Build de Produção
```bash
# Gere o build otimizado
npm run build

# Teste o build localmente
npm install -g serve
serve -s build
```

## 📱 Funcionalidades por Aba

### **Aba ONGs** (Padrão)
- Visualização das ONGs disponíveis
- Filtros por categoria
- Sistema de doação via PIX
- Estatísticas gerais

### **Aba Sobre a Pier**
- Informações institucionais
- História e valores da empresa
- Diferenciais da plataforma

### **Aba Para Estudantes**
- Benefícios exclusivos
- Geração de certificados
- Estatísticas de estudantes
- Formulário de solicitação

### **Aba Para Empresas**
- Ferramentas corporativas
- Geração de relatórios
- Métricas de impacto
- Formulário de relatórios

### **Aba Login**
- Sistema de autenticação
- Login social
- Recuperação de senha
- Cadastro de usuários

## 🎨 Design System

### Cores
- **Primárias**: Azuis (#1e3a8a, #3b82f6)
- **Secundárias**: Amarelos (#fbbf24, #f59e0b)
- **Texto**: Cinzas (#1f2937, #6b7280)
- **Fundo**: Gradientes azuis

### Componentes
- Cards com backdrop-filter e sombras
- Botões com gradientes e hover effects
- Formulários responsivos
- Navegação por abas
- Modais e overlays

### Responsividade
- Breakpoints: Mobile (768px), Tablet (1024px), Desktop (1200px)
- Grid layouts adaptativos
- Componentes mobile-first

## 🔧 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── CategoryFilter.js
│   ├── Login.js
│   ├── ONGList.js
│   ├── ParaEmpresas.js
│   ├── ParaEstudantes.js
│   ├── PIXModal.js
│   ├── SobrePier.js
│   ├── StatsSection.js
│   └── TabNavigation.js
├── config/             # Configurações
│   ├── ongs.js        # Dados das ONGs
│   └── theme.js       # Sistema de design
├── App.js             # Componente principal
└── index.js           # Ponto de entrada
```

## 📊 Dados das ONGs

O sistema inclui 6 ONGs organizadas por categoria:
- **Proteção Animal**: Agência arte & ação cultural
- **Educação**: Associação anjos da luz
- **Meio Ambiente**: Associação das antigas alunas da providência
- **Saúde**: Associação de educação saúde e cultura AESC
- **Habitação**: Associação de integração social de Itajubá
- **Esporte**: Associação de pais e amigos dos excepcionais de Itajubá

## 🚀 Próximos Passos

- [ ] Implementar backend para autenticação
- [ ] Sistema de geração real de certificados
- [ ] Geração de relatórios em PDF
- [ ] Dashboard personalizado para usuários logados
- [ ] Sistema de notificações
- [ ] Integração com APIs de pagamento
- [ ] Sistema de gamificação
- [ ] App mobile nativo

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Empresa**: Pier
- **Localização**: Itajubá, MG
- **Email**: contato@pier.com.br
- **Website**: www.pier.com.br

---

**Pier** - Transformando a forma como as pessoas se conectam com causas sociais através da tecnologia. 🌟
# ong-app
