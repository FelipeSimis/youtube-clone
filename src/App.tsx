import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { SidebarProvider } from './hooks/sidebar';

import Layout from './components/Layout';

import { ThemeName, themes } from './styles/themes';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const themeName = localStorage.getItem('@YoutubeClone:theme');

    if (themeName) {
      return themeName as 'light' | 'dark';
    }

    return {} as ThemeName;
  });
  const currentTheme = themes[theme];

  return (
    <ThemeProvider theme={currentTheme}>
      <SidebarProvider>
        <BrowserRouter>
          <Layout theme={theme} setTheme={setTheme} />
        </BrowserRouter>
      </SidebarProvider>

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
