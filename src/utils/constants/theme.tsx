export const theme = {
  colors: {
    // Cores principais do sistema
    primary: '#00D4FF', // Cyan vibrante
    secondary: '#7C3AED', // Roxo tech
    accent: '#F59E0B', // Amarelo dourado
    success: '#10B981', // Verde esmeralda
    danger: '#EF4444', // Vermelho moderno
    warning: '#F59E0B', // Amarelo âmbar
    info: '#3B82F6', // Azul tech

    // Cores de fundo
    background: {
      primary: '#0A0A0F', // Preto profundo
      secondary: '#111118', // Cinza muito escuro
      tertiary: '#1A1A23', // Cinza escuro
      glass: 'rgba(255, 255, 255, 0.05)', // Vidro líquido
      glassHover: 'rgba(255, 255, 255, 0.08)', // Vidro líquido hover
    },

    // Cores de texto
    text: {
      primary: '#FFFFFF', // Branco puro
      secondary: '#E5E7EB', // Cinza claro
      tertiary: '#9CA3AF', // Cinza médio
      muted: '#6B7280', // Cinza escuro
      accent: '#00D4FF', // Cyan para destaques
    },

    // Cores de borda
    border: {
      primary: 'rgba(255, 255, 255, 0.1)', // Borda sutil
      secondary: 'rgba(255, 255, 255, 0.2)', // Borda mais visível
      accent: 'rgba(0, 212, 255, 0.3)', // Borda com cor primária
      glass: 'rgba(255, 255, 255, 0.15)', // Borda para vidro
    },

    // Cores de gradiente para o nome
    gradient: {
      primary: ['#00D4FF', '#7C3AED', '#F59E0B'], // Cyan -> Roxo -> Amarelo
      secondary: ['#00D4FF', '#3B82F6', '#7C3AED'], // Cyan -> Azul -> Roxo
      accent: ['#F59E0B', '#EF4444', '#7C3AED'], // Amarelo -> Vermelho -> Roxo
    },

    // Cores de sombra
    shadow: {
      primary: 'rgba(0, 212, 255, 0.2)',
      secondary: 'rgba(124, 58, 237, 0.2)',
      accent: 'rgba(245, 158, 11, 0.2)',
      dark: 'rgba(0, 0, 0, 0.3)',
      glass: 'rgba(255, 255, 255, 0.1)',
    },

    // Cores de efeito
    glow: {
      primary: 'rgba(0, 212, 255, 0.4)',
      secondary: 'rgba(124, 58, 237, 0.4)',
      accent: 'rgba(245, 158, 11, 0.4)',
    },

    // Cores de estado
    state: {
      hover: 'rgba(255, 255, 255, 0.05)',
      active: 'rgba(0, 212, 255, 0.1)',
      disabled: 'rgba(107, 114, 128, 0.3)',
    },

    // Cores legadas (para compatibilidade)
    light: '#E5E7EB',
    dark: '#1A1A23',
    white: '#FFFFFF',
    black: '#0A0A0F',
    borderPrimary: 'rgba(255, 255, 255, 0.1)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  sizes: {
    header: {
      height: '60px',
    },
    wrapper: {
      maxWidth: '1100px',
      contactSection: '500px',
    },
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
  fonts: {
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem',
      xxxl: '2rem',
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    families: {
      primary: 'Montserrat, sans-serif',
      secondary: 'Roboto, sans-serif',
      tertiary: 'Barlow, sans-serif',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    lg: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
    xl: '0 6px 8px 0 rgba(0, 0, 0, 0.1)',
    glass: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
    // Removidos todos os efeitos de glow
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },

  // Estilos para liquid glass - versão minimalista
  glass: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
  },

  // Efeitos tech - versão minimalista
  effects: {
    noise: {
      background: `
        radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.02) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.02) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(245, 158, 11, 0.02) 0%, transparent 50%)
      `,
    },
    grid: {
      background: `
        linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
    },
  },
}
