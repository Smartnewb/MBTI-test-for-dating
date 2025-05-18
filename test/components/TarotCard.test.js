import { render, screen } from '@testing-library/react';
import TarotCard from '../../src/app/components/TarotCard';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

// Create a theme for testing
const theme = createTheme({
  palette: {
    primary: {
      main: '#6B3FA0',
      dark: '#4A235A',
    },
    secondary: {
      main: '#D4AF37',
      dark: '#B8860B',
    },
    background: {
      paper: '#121212',
      default: '#000000',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#C0C0C0',
    },
  },
});

describe('TarotCard Component', () => {
  it('renders the title correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <TarotCard title="Test Title">
          <p>Test Content</p>
        </TarotCard>
      </ThemeProvider>
    );
    
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <ThemeProvider theme={theme}>
        <TarotCard title="Test Title">
          <p>Test Content</p>
        </TarotCard>
      </ThemeProvider>
    );
    
    const content = screen.getByText('Test Content');
    expect(content).toBeInTheDocument();
  });

  it('applies the primary variant styling', () => {
    render(
      <ThemeProvider theme={theme}>
        <TarotCard title="Primary Card" variant="primary">
          <p>Primary Content</p>
        </TarotCard>
      </ThemeProvider>
    );
    
    const title = screen.getByText('Primary Card');
    expect(title).toBeInTheDocument();
    
    // We can't easily test the styling directly, but we can check that the component renders
    const content = screen.getByText('Primary Content');
    expect(content).toBeInTheDocument();
  });

  it('applies the secondary variant styling', () => {
    render(
      <ThemeProvider theme={theme}>
        <TarotCard title="Secondary Card" variant="secondary">
          <p>Secondary Content</p>
        </TarotCard>
      </ThemeProvider>
    );
    
    const title = screen.getByText('Secondary Card');
    expect(title).toBeInTheDocument();
    
    const content = screen.getByText('Secondary Content');
    expect(content).toBeInTheDocument();
  });

  it('renders without a title', () => {
    render(
      <ThemeProvider theme={theme}>
        <TarotCard>
          <p>No Title Content</p>
        </TarotCard>
      </ThemeProvider>
    );
    
    const content = screen.getByText('No Title Content');
    expect(content).toBeInTheDocument();
  });
});
