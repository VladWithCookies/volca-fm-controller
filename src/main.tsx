import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import TabsRoot from '@/components/atoms/TabsRoot';
import TabsList from '@/components/atoms/TabsList';
import TabsTrigger from '@/components/atoms/TabsTrigger';
import TabsContent from '@/components/atoms/TabsContent';
import OperatorsPage from '@/components/pages/OperatorsPage';
import EnvelopesPage from '@/components/pages/EnvelopesPage';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TabsRoot>
      <TabsList>
        <TabsTrigger value="operators">
          Operators
        </TabsTrigger>
        <TabsTrigger value="envelopes">
          Envelopes
        </TabsTrigger>
      </TabsList>
      <TabsContent value="operators">
        <OperatorsPage />
      </TabsContent>
      <TabsContent value="envelopes">
        <EnvelopesPage />
      </TabsContent>
	  </TabsRoot>
  </StrictMode>,
);
