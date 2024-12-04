import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Container, HeaderContainer, IconContainer } from "./styles";
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

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

  const headerBackgroundColor = mode === 'light' ? '#f5f5f5' : '#1c1c1c';

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Container>
        <HeaderContainer style={{ backgroundColor: headerBackgroundColor }}>
          <IconContainer>
          <PhoneIcon
            className="Phone"
            style={{ fontSize: 40 }}
            onClick={() => window.open("tel:+54999669212", "_blank")}
          />
          <WhatsAppIcon
            className="WhatsApp"
            style={{ fontSize: 40 }}
            onClick={() => window.open("https://wa.me/54999669212", "_blank")}
          />
          <EmailIcon
            className="Email"
            style={{ fontSize: 40 }}
            onClick={() => window.open("mailto:contato@softcodesistemas.com.br", "_blank")}
          />
            <IconButton color="inherit" onClick={toggleColorMode} className="IconButton">
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
