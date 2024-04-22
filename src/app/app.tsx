import { lazy, Suspense, ReactNode } from 'react';

import { ThemeContext } from 'styled-components';
import { useTheme } from './theme.ts';
import './style.css';

const CustomerList = lazy(() => import('../pages/customer-list'));

export default function App(): ReactNode {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>
      <Suspense fallback={'Loading...'}>
        <CustomerList />
      </Suspense>
    </ThemeContext.Provider>
  );
}
