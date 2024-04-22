import { createContext, useContext } from 'react';

interface Theme {
  palette: any;
}

const theme: Theme = {
  palette: {
    black: '#1A1A1A',
    secondary: '#F0F0F5',
    borderColor: '#E6E6E6',
    white: 'white'
  }
};

const themeContext = createContext<Theme>(theme);

export const useTheme = () => useContext<Theme>(themeContext);
