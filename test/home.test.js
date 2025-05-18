import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock the components that might cause issues in tests
jest.mock('next/link', () => {
  return ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };
});

// Create a theme for testing
const theme = createTheme({
  palette: {
    primary: {
      main: '#6B3FA0',
    },
    secondary: {
      main: '#D4AF37',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#C0C0C0',
    },
  },
});

// Create a query client for testing
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('Home Page', () => {
  it('renders the main title', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </QueryClientProvider>
    );
    
    const title = screen.getByText('달빛 연애 연구소');
    expect(title).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </QueryClientProvider>
    );
    
    const subtitle = screen.getByText('MBTI 연애 테스트');
    expect(subtitle).toBeInTheDocument();
  });

  it('renders the start test button', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </QueryClientProvider>
    );
    
    const button = screen.getByText('테스트 시작하기');
    expect(button).toBeInTheDocument();
  });
});
