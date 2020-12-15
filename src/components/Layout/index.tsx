import React, { useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { useSidebar } from '../../hooks/sidebar';

import { Container } from './styles';
import { ThemeName } from '../../styles/themes';

import Header from '../Header';
import Sidebar from '../Sidebar';

import Home from '../../pages/Home';
import Trends from '../../pages/Trends';
import Library from '../../pages/Library';

interface Props {
  theme: ThemeName;
  setTheme: (newName: ThemeName) => void;
}

const Layout: React.FC<Props> = ({ theme, setTheme }) => {
  const [actualWidth, setActualWidth] = useState(0);

  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  useEffect(() => {
    const width = window.innerWidth;

    setActualWidth(width);

    if (width >= 1024) {
      setIsSidebarOpen(true);
    }
  }, [setIsSidebarOpen]);

  window.onresize = () => {
    setActualWidth(window.innerWidth);
  };

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');

    localStorage.setItem(
      '@YoutubeClone:theme',
      theme === 'light' ? 'dark' : 'light'
    );
  }, [theme, setTheme]);

  return (
    <Container isActive={isSidebarOpen && actualWidth >= 1024}>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Sidebar theme={theme} toggleTheme={toggleTheme} />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/trending" component={Trends} />
        <Route path="/library" component={Library} />
      </Switch>
    </Container>
  );
};

export default Layout;
