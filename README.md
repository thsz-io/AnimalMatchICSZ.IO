# Animal Match - Sistema de Adoção Responsável

Sistema completo de adoção de animais com foco em compatibilidade real entre adotante e pet, eliminando adoção por impulso e critérios estéticos.

## 🎨 Tecnologias

- **React 18** com TypeScript
- **Tailwind CSS v4** (paleta roxo/rosa)
- **Motion (Framer Motion)** para animações suaves
- **Lucide React** para ícones
- **React Router v7** para navegação
- **Radix UI** para componentes acessíveis

## 📱 Páginas e Funcionalidades

### 1. Home / Landing Page (`/`)
- Hero section com proposta de valor
- Seção "Como Funciona" (3 etapas)
- Grid de animais disponíveis com fotos
- Filtros interativos (Espécie, Porte, Energia)
- Navegação para cadastros e dashboards

### 2. Cadastro do Adotante (`/cadastro-adotante`)
**Multi-step form com 3 passos:**

- **Passo 1 - Segurança:**
  - Nome, E-mail, Telefone, CPF
  - Data de Nascimento (validação +18)
  - Upload simulado de Documento (RG/CNH)
  - Liveness Check simulado (Selfie)

- **Passo 2 - Moradia:**
  - Faixa de renda
  - Tipo de moradia (Apartamento/Casa/Sítio)
  - Possui quintal?
  - Tempo livre diário para o pet

- **Passo 3 - Preferências:**
  - Porte preferido (SEM raça ou cor)
  - Nível de energia desejado (1-5)

### 3. Cadastro de Animal pela ONG (`/cadastro-animal`)
**Multi-step estruturado para DB com 3 passos:**

- **Passo 1 - Básico:**
  - Nome, Espécie, Porte, Idade

- **Passo 2 - Saúde (Crucial):**
  - Toggle: Vacinado? (Sim/Não)
  - Toggle: Castrado? (Sim/Não)
  - Toggle: Vermifugado? (Sim/Não)

- **Passo 3 - Comportamento:**
  - Slider: Nível de energia (1-5)
  - Toggle: Necessita de área externa/quintal? (Sim/Não)

### 4. Dashboard do Adotante (`/dashboard-adotante`)
- Cards de métricas (Total Matches, Match Mais Alto, Conversas)
- Grid com matches pessoais
- Scores de compatibilidade (%)
- Motivo da compatibilidade explicado
- Botões de ação (Conversar, Ver Detalhes)

### 5. Dashboard da ONG (`/dashboard-ong`)
- Cards de estatísticas gerais
- Grid de animais cadastrados
- Status de cada animal (Disponível/Em Triagem/Em Processo)
- Métricas por animal (Matches, Solicitações, Energia)
- Botão para acessar Dossiê completo

### 6. Dossiê/Histórico do Animal (`/dossie/:animalId`) ⭐
**Tela de auditoria completa:**

- **Cabeçalho:**
  - Foto do pet
  - Nome, tempo de abrigo
  - Badge de status
  - Métricas: Dias no Abrigo, Matches >40%, Solicitações, Mensagens

- **Aba 1 - Interações:**
  - Lista de candidatos (Accordion)
  - Candidatos mockados: **Fernanda (92%)** e **Vitória (85%)**
  - Chat simulado com balões de mensagem
  - Histórico completo de conversa ONG ↔ Candidato

- **Aba 2 - Linha do Tempo / Prontuário:**
  - Timeline vertical com eventos cronológicos
  - Eventos incluem:
    - Data do Resgate (com descrição)
    - Primeira Avaliação Veterinária
    - Vermifugação
    - Vacinações (V3 e Antirrábica)
    - Castração
    - Avaliação Comportamental

## 🎯 Dados Mockados

### Animais (Home Page)
- **Zangado** (Gato, 3 anos, Médio, Energia 2)
- **Pelé** (Gato, 5 anos, Grande, Energia 4)
- **Evangeline** (Gato, 2 anos, Pequeno, Energia 3)
- Luna (Cachorro, 4 anos, Médio, Energia 5)
- Thor (Cachorro, 6 anos, Grande, Energia 3)
- Mel (Cachorro, 1 ano, Pequeno, Energia 5)

### Candidatos (Dossiê)
- **Fernanda** - 92% de compatibilidade, chat com 4 mensagens
- **Vitória** - 85% de compatibilidade, chat com 3 mensagens

## 🚀 Navegação

```
/ (Home)
├── /cadastro-adotante (Cadastro Adotante)
├── /cadastro-animal (Cadastro Animal ONG)
├── /dashboard-adotante (Dashboard Adotante)
├── /dashboard-ong (Dashboard ONG)
└── /dossie/:animalId (Dossiê do Animal)
```

## 🎨 Paleta de Cores

- **Primary:** Roxo (#8b5cf6)
- **Secondary:** Rosa claro (#f3e8ff)
- **Accent:** Rosa (#fce7f3)
- **Background:** Branco suave (#faf9fb)
- **Borders:** Roxo claro (#e9d5ff)

## ✨ Características Especiais

- ✅ Formulários multi-step com validação visual
- ✅ Animações suaves com Motion
- ✅ Responsivo (mobile e desktop)
- ✅ Componentes acessíveis (Radix UI)
- ✅ Estados locais (sem backend real)
- ✅ Navegação fluida com React Router
- ✅ Sistema de Match baseado em compatibilidade real
- ✅ Auditoria completa com timeline e histórico de conversas
- ✅ Proibição de critérios estéticos (raça, cor)

## 🔐 Segurança e Auditoria

- Upload de documento obrigatório
- Liveness Check (verificação de identidade)
- Validação de idade (+18)
- Histórico completo de saúde do animal
- Timeline detalhada de eventos
- Chat completo entre ONG e candidatos
- Score de compatibilidade transparente

---

**Desenvolvido para projeto acadêmico de Banco de Dados**
Sistema completo de adoção responsável com forte camada de segurança e auditoria.
