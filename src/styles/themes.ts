export const themes = {
  dark: {
    'bg-color': '#181818',
    title: '#ffffff',
    white: '#ffffff',
    header: '#202020',
    button: '#313131',
    text: '#aaaaaa',
    'active-button': 'rgba(255, 255, 255, 0.1)',
    'hover-active-button': '#5c5c5c',
    'active-sidemenu-link': '#ffffff',
    'active-button-sidebar': 'rgba(255, 255, 255, 0.1)',
    'hover-active-button-sidebar': '#5c5c5c',
    icon: '#909090',
    border: '#383838',
    'trend-header-icon': '#565656',
    'focus-button': 'rgba(255, 255, 255, 0.2)',
    'focus-button-mid-animation': 'rgba(255, 255, 255, 0.4)',
    scrollbar: 'rgba(255, 255, 255, 0.1)',
  },
  light: {
    'bg-color': '#f9f9f9',
    title: '#030303',
    header: '#ffffff',
    white: '#606060',
    button: '#f8f8f8',
    text: '#606060',
    'active-button': 'rgba(100, 100, 100, 0.5)',
    'hover-active-button': '#5c5c5c',
    'active-sidemenu-link': '#ff0000',
    'active-button-sidebar': 'rgba(120, 120, 120, 0.2)',
    'hover-active-button-sidebar': 'rgba(120, 120, 120, 0.4)',
    icon: '#606060',
    border: '#d9d9d9',
    'trend-header-icon': '#404040',
    'focus-button': 'rgba(120, 120, 120, 0.6)',
    'focus-button-mid-animation': 'rgba(120, 120, 120, 0.9)',
    scrollbar: 'rgba(0, 0, 0, 0.1)',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
