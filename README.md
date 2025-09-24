# Web Portfolio v7

Portfolio pessoal desenvolvido com React, Vite, TypeScript, Styled Components e Framer Motion.

## 🚀 Tecnologias

- **React 18** - Biblioteca de interface
- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **React Router DOM** - Roteamento
- **Styled Components** - CSS-in-JS
- **Framer Motion** - Animações
- **React Icons** - Ícones
- **Tech Stack Icons** - Ícones de tecnologias

## ✨ Funcionalidades

- **Design Responsivo** - Adaptável a todos os dispositivos
- **Animações Fluidas** - Efeitos de scroll e hover com Framer Motion
- **Navegação Suave** - Scroll spy e navegação entre seções
- **Modais Interativos** - Visualização detalhada de projetos
- **Carrossel de Imagens** - Galeria de projetos com transições
- **Filtros Dinâmicos** - Organização de skills por categoria
- **Efeitos de Parallax** - Elementos flutuantes e movimento
- **Typewriter Effect** - Animação de digitação no hero

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button/         # Botões com animações
│   ├── Modal/          # Modais com transições
│   ├── ProjectCard/    # Cards de projetos
│   ├── SkillCard/      # Cards de habilidades
│   └── ...
├── screens/            # Páginas da aplicação
│   └── LandingPage/    # Página principal com seções
├── hooks/              # Hooks personalizados
│   ├── useScrollAnimation.ts
│   ├── useStaggerAnimation.ts
│   └── useParallaxAnimation.ts
├── utils/              # Utilitários e constantes
│   ├── constants/      # Dados e animações
│   └── types/          # Definições TypeScript
└── main.tsx           # Ponto de entrada
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção otimizado
- `npm run build:vercel` - Build específico para Vercel
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter
- `npm run lint:fix` - Corrige problemas de linting
- `npm run type-check` - Verifica tipos TypeScript

## 🚀 Deploy na Vercel

### Opção 1: Deploy Automático (Recomendado)

1. **Conecte seu repositório GitHub à Vercel:**

   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Importe este repositório

2. **Configure as variáveis de ambiente (opcional):**

   - No dashboard da Vercel, vá em Settings > Environment Variables
   - Adicione as variáveis necessárias (veja `env.example`)

3. **Deploy automático:**
   - A Vercel detectará automaticamente que é um projeto Vite
   - O build será executado automaticamente
   - Sua aplicação estará online em alguns minutos

### Opção 2: Deploy Manual

1. **Instale a CLI da Vercel:**

   ```bash
   npm i -g vercel
   ```

2. **Faça login na Vercel:**

   ```bash
   vercel login
   ```

3. **Execute o deploy:**
   ```bash
   vercel --prod
   ```

## 📦 Instalação Local

```bash
# Clone o repositório
git clone <seu-repositorio>
cd web-portfolio-v7

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## ⚙️ Configuração

### Variáveis de Ambiente

Copie o arquivo `env.example` para `.env.local` e configure:

```bash
cp env.example .env.local
```

### Personalização

- **Dados pessoais**: Edite `src/utils/constants/data.tsx`
- **Tema**: Modifique `src/utils/constants/theme.tsx`
- **Animações**: Ajuste `src/utils/constants/animations.ts`

## 🎨 Customização

### Cores e Tema

O tema está centralizado em `src/utils/constants/theme.tsx`. Você pode:

- Alterar as cores principais
- Modificar tipografia
- Ajustar breakpoints responsivos

### Animações

As animações estão em `src/utils/constants/animations.ts`:

- Ajuste durações e delays
- Modifique efeitos de hover
- Crie novas variantes

### Dados do Portfolio

Edite `src/utils/constants/data.tsx` para:

- Atualizar informações pessoais
- Adicionar/remover projetos
- Modificar skills e experiências
