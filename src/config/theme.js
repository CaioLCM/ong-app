export const theme = {
  colors: {
    primary: {
      main: '#1e3a8a',
      light: '#3b82f6',
      dark: '#1e40af'
    },
    secondary: {
      main: '#fbbf24',
      light: '#fcd34d',
      dark: '#f59e0b'
    },
    background: {
      main: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      overlay: 'rgba(0, 0, 0, 0.7)',
      card: 'white'
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
      white: 'white',
      whiteTransparent: 'rgba(255, 255, 255, 0.9)'
    },
    shadow: {
      light: '0 5px 20px rgba(0, 0, 0, 0.1)',
      medium: '0 10px 30px rgba(0, 0, 0, 0.2)',
      heavy: '0 20px 60px rgba(0, 0, 0, 0.3)'
    }
  },
  gradients: {
    primary: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    primaryHover: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
    secondary: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    accent: 'linear-gradient(135deg, #3b82f6 0%, #fbbf24 100%)'
  },
  borderRadius: {
    small: '10px',
    medium: '20px',
    large: '25px',
    round: '50%'
  },
  spacing: {
    xs: '8px',
    sm: '15px',
    md: '20px',
    lg: '30px',
    xl: '40px'
  },
  typography: {
    h1: '3rem',
    h2: '1.8rem',
    h3: '1.5rem',
    h4: '1.2rem',
    body: '1rem',
    small: '0.9rem'
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  }
};

export const mediaQueries = {
  mobile: `@media (max-width: 768px)`,
  tablet: `@media (max-width: 1024px)`,
  desktop: `@media (min-width: 1200px)`
};
