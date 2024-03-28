import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Container, HeaderContainer, IconContainer } from "./styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface LayoutProps {
  children: React.ReactNode;
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#282828',
      secondary: '#666',
      disabled: '#999',
    },
    background: {
      default: '#dddcdc',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#dddcdc',
      secondary: '#ccc',
      disabled: '#666',
    },
    background: {
      default: '#282828',
    },
  },
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const toggleColorMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Container>
          <HeaderContainer>
            <IconContainer>
              <GitHubIcon className="GitHub" style={{ fontSize: 40 }} onClick={() => window.location.href = "https://github.com/ViniDill"} />
              <LinkedInIcon className="LinkedIn" style={{ fontSize: 40 }} onClick={() => window.location.href = "https://www.linkedin.com/in/vinidill/"} />
              <IconButton color="inherit" onClick={toggleColorMode}>
                {mode === 'light' ? <WbSunnyIcon style={{ fontSize: 40 }} /> : <NightsStayIcon style={{ fontSize: 40 }} />}
              </IconButton>
            </IconContainer>
          </HeaderContainer>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;