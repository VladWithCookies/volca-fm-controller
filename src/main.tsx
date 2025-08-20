import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import OperatorsPage from '@/components/pages/OperatorsPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OperatorsPage />
  </StrictMode>,
);
