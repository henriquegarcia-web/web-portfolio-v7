import { IPortfolioData } from '@/utils/types'

export const USER_DATA: IPortfolioData = {
  personal: {
    name: 'Henrique Garcia',
    title: {
      main: 'Desenvolvedor Full-Stack | Foco em Front-End',
      hero: ['Full-Stack', 'Front-End', 'E-commerce', 'Mobile', 'de Jogos', 'Back-End'],
    },
    email: 'henriquegarcia.tech@gmail.com',
    phone: '+55 84 99814-7860',
    location: 'Natal, RN',
    summary:
      'Sou um profissional proativo e movido por desafios, com mais de cinco anos dedicados à construção de softwares. Tenho uma abordagem orientada à solução e o hábito de me aprofundar em novas tecnologias de forma autodidata. Em meu tempo livre, gosto de aplicar minhas habilidades em projetos variados, que vão desde a construção de aplicativos complexos até o desenvolvimento de jogos.',
    heroSummary:
      'Crio soluções digitais que resolvem problemas reais e geram valor, da concepção à entrega final.',
    socialLinks: {
      github: 'https://github.com/henriquegarcia-web',
      linkedin: 'https://www.linkedin.com/in/henrique-garcia-dev',
      behance: 'https://www.behance.net/henrique-garcia-dev',
    },
    interests: ['Código Aberto', 'UX', 'Jogos 3D Realistas', 'IA', 'Metodologias Ágeis'],
  },

  technicalAreas: [
    {
      title: 'E-Commerce',
      icon: '💻',
      description:
        'Soluções de e-commerce com foco em performance, SEO, Checkout e Integrações',
    },
    {
      title: 'Sistemas de Gestão',
      icon: '⚙️',
      description:
        'Plataformas de Gestão Complexas, Sistemas Multi-Plataforma, Multi-Tenant e SaaS',
    },
    {
      title: 'Resolução de Problemas',
      icon: '💡',
      description:
        'Foco na resolução prática, usando princípios de arquitetura sólida para entregar resultados eficientes e de alta qualidade',
    },
  ],

  experience: [
    {
      id: 'moovin-2021',
      position: 'Desenvolvedor Front-End',
      company: 'Moovin E-commerce',
      location: 'Remoto',
      type: 'remote',
      startDate: '2021-02',
      endDate: '2021-10',
      description:
        'Atuei em um projeto de modernização de temas e componentes visuais para uma plataforma de e-commerce white-label, com mais de 1.000 lojas ativas na base.',
      achievements: [
        'Padronização de layouts e documentação de temas',
        'Suporte a customizações para clientes',
        'Contribuições para melhorias internas no design system',
        'Redução de tempo de entrega de novos templates',
        'Melhorias no desempenho visual dos clientes',
      ],
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'SASS',
        'jQuery',
        'Design System',
        'SEO Optimization',
        'Core Web Vitals',
        'Git',
      ],
    },
    {
      id: 'grupo-pereira-2022',
      position: 'Desenvolvedor Front-End Pleno',
      company: 'Grupo Pereira',
      location: 'Remoto',
      type: 'remote',
      startDate: '2022-09',
      endDate: '2023-04',
      description:
        'Fiz parte de um time responsável por uma plataforma de e-commerce de grande porte, com alta volumetria de acessos e foco em performance.',
      achievements: [
        'Manutenção de interfaces em plataforma de alto volume',
        'Migração de estruturas antigas para padrões modernos',
        'Colaboração direta com desenvolvedores, designers e times de produto',
        'Participação em entregas recorrentes em sprints',
        'Contribuições para refatorações e testes automatizados',
        'Melhoria da experiência do usuário',
      ],
      technologies: [
        'React',
        'Redux',
        'TypeScript',
        'GraphQL',
        'REST APIs',
        'React Native',
        'Magento',
        'Cypress',
        'RTL (React Testing Library)',
        'Jira',
        'Bitbucket',
        'Git',
      ],
    },
    {
      id: 'freelancer-2018',
      position: 'Freelancer Full-Stack',
      company: '99Freelas/Workana',
      location: 'Remoto',
      type: 'remote',
      startDate: '2018-01',
      endDate: 'present',
      current: true,
      description:
        'Atuei em mais de 20 projetos completos como desenvolvedor full-stack, com entregas que vão desde MVPs entregues em menos de 10 dias até plataformas robustas com estrutura modular e gestão de usuários.',
      achievements: [
        'Mais de 20 projetos completos desenvolvidos',
        'Sistemas utilizados por mais de 10 mil acessos mensais',
        'Responsável por todas as etapas: levantamento, planejamento, desenvolvimento, testes, deploy, manutenção',
        'Experiência com SaaS, plataformas administrativas, produtos digitais',
        'Integrações com meios de pagamento e sistemas de gestão',
        'Múltiplos fluxos simultâneos (administração, autenticação, checkout, conteúdo dinâmico)',
      ],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Express',
        'Firebase (Auth, Firestore, Storage, Functions)',
        'PostgreSQL',
        'Prisma ORM',
        'Stripe API',
        'Tailwind CSS',
        'Styled Components',
        'React Query',
        'React Hook Form',
        'Yup',
        'Ant Design',
        'Context API',
        'JWT',
        'i18n',
        'Vite',
        'Git',
        'WebSockets',
        'ViaCEP API',
      ],
    },
  ],

  education: [
    {
      id: 'master-2019',
      degree: 'Ensino Médio Completo',
      institution: 'Colégio Master',
      location: 'João Pessoa, RN',
      startDate: '2019-03',
      endDate: '2022-10',
    },
    {
      id: 'senac-2018',
      degree: 'Curso Técnico de Programação de Jogos Digitais',
      institution: 'Senac RS',
      location: 'Porto Alegre, RS',
      startDate: '2018-01',
      endDate: '2019-12',
      description:
        'Curso com mais de 1.200 horas focado no desenvolvimento completo de jogos 2D e 3D.',
      projects: [
        'Mais de 10 projetos práticos durante a formação',
        'Jogo final autoral com sistema de fases, interface e mecânicas próprias',
        'Estudos em fundamentos de lógica, física aplicada, IA básica, narrativa interativa e organização de assets',
      ],
    },
  ],

  certifications: [
    {
      id: 'scrum-master',
      name: 'Scrum Master',
      issuer: 'Udemy',
      date: '2023',
      description:
        'Formação voltada à aplicação prática do framework Scrum em projetos reais, com foco em gestão de sprints, definição de backlog, papéis do time ágil e entregas contínuas dentro de contextos de produto digital.',
    },
    {
      id: 'frontend-moderno',
      name: 'Front-End Moderno',
      issuer: 'Alura',
      date: '2023',
      description:
        'Capacitação em desenvolvimento com React, componentes reutilizáveis, hooks, controle de estado, rotas e consumo de APIs REST, abordando o ecossistema moderno do front-end com foco em experiência do usuário, responsividade e manutenção de código.',
    },
    {
      id: 'desenvolvimento-web-completo',
      name: 'Desenvolvimento Web Completo',
      issuer: 'Danki Code',
      date: '2022',
      description:
        'Formação intensiva abordando o ciclo completo de uma aplicação full-stack com React no front e Node.js no back, incluindo criação de APIs, autenticação, manipulação de dados, deploy, e aplicação prática de conceitos como responsividade, SPA e integração com banco de dados.',
    },
    {
      id: 'okr-agilidade',
      name: 'Formação OKR & Agilidade Profissional',
      issuer: 'G4 Educação',
      date: '2023',
      description:
        'Curso estratégico voltado à criação de metas organizacionais aplicadas ao desenvolvimento de software, com foco em produtividade, alinhamento de times de produto e tomada de decisão baseada em ciclos ágeis de planejamento e resultados chave (OKRs).',
    },
  ],

  skills: [
    {
      category: 'Front-End',
      technologies: [
        'React.js',
        'Next.js (App Router e Pages)',
        'Bubble',
        'Redux',
        'Context API',
        'Zustand',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'SASS',
        'Styled Components',
        'Tailwind CSS',
        'Emotion',
        'Material UI (MUI)',
        'Ant Design (ANTD)',
        'Bootstrap',
      ],
    },
    {
      category: 'Back-End',
      technologies: [
        'Node.js',
        'Express.js',
        'NestJS',
        'Firebase Functions',
        'Prisma ORM',
        'REST APIs',
        'GraphQL',
        'JWT',
        'OAuth',
      ],
    },
    {
      category: 'Banco de Dados',
      technologies: [
        'Firebase Firestore & Realtime Database',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
      ],
    },
    {
      category: 'DevOps & Infraestrutura',
      technologies: [
        'Docker',
        'Vercel',
        'Digital Ocean',
        'AWS (EC2, S3)',
        'GitHub Actions',
        'CI/CD',
      ],
    },
    {
      category: 'Testes',
      technologies: ['Jest', 'React Testing Library', 'Cypress', 'Vitest'],
    },
    {
      category: 'Ferramentas & Outros',
      technologies: [
        'Figma',
        'Storybook',
        'Webpack',
        'Babel',
        'Vite',
        'Stripe API',
        'WebSockets',
        'i18n',
        'React Hook Form',
        'Yup',
        'Formik',
        'ESlint',
        'Prettier',
        'Git',
        'SEO',
        'Clean Code',
        'SOLID',
        'Postman',
      ],
    },
  ],

  projects: [
    {
      id: 'ecommerce-platform',
      title: 'Plataforma E-commerce White-label',
      description: 'Sistema completo de e-commerce com mais de 1.000 lojas ativas',
      longDescription:
        'Plataforma robusta de e-commerce white-label desenvolvida para a Moovin, com foco em performance e customização. Inclui sistema de temas, componentes reutilizáveis e otimizações de SEO.',
      technologies: ['React', 'TypeScript', 'Styled Components', 'Node.js', 'PostgreSQL'],
      features: [
        'Sistema de temas customizáveis',
        'Dashboard administrativo completo',
        'Integração com gateways de pagamento',
        'SEO otimizado',
        'Design system padronizado',
      ],
      status: 'completed',
      featured: true,
      startDate: '2021-02',
      endDate: '2021-10',
    },
    {
      id: 'admin-dashboard',
      title: 'Dashboard Administrativo',
      description: 'Sistema de gestão com mais de 10 mil acessos mensais',
      longDescription:
        'Dashboard completo desenvolvido como freelancer, incluindo autenticação, gestão de usuários, relatórios em tempo real e integração com APIs externas.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Prisma',
        'PostgreSQL',
        'Stripe',
      ],
      features: [
        'Autenticação JWT',
        'Gestão de usuários e permissões',
        'Relatórios em tempo real',
        'Integração com Stripe',
        'Interface responsiva',
      ],
      status: 'completed',
      featured: true,
    },
    {
      id: 'mobile-app',
      title: 'Aplicativo Mobile React Native',
      description:
        'App mobile com funcionalidades avançadas e sincronização em tempo real',
      longDescription:
        'Aplicativo mobile desenvolvido com React Native, incluindo funcionalidades offline, sincronização em tempo real e integração com APIs REST.',
      technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'WebSockets'],
      features: [
        'Funcionalidades offline',
        'Sincronização em tempo real',
        'Push notifications',
        'Integração com APIs REST',
        'Interface nativa',
      ],
      status: 'completed',
      featured: true,
    },
  ],

  resumeUrl: '/resume-henrique-garcia.pdf',
}
