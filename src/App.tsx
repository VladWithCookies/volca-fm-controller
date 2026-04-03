import { useCallback, useEffect } from 'react';

import { debounce } from '@/utils/common';
import { createDX7Sysex } from '@/utils/sysex';
import useStore from '@/hooks/useStore';
import useMIDI from './hooks/useMIDI';
import TabsRoot from '@/components/atoms/TabsRoot';
import TabsList from '@/components/atoms/TabsList';
import TabsTrigger from '@/components/atoms/TabsTrigger';
import TabsContent from '@/components/atoms/TabsContent';
import OperatorsPage from '@/components/pages/OperatorsPage';
import EnvelopesPage from '@/components/pages/EnvelopesPage';

type SendSysexCallback = (args: { algorithmId: AlgorithmId, operators: State['operators'] }) => void;

export default function App() {
  const algorithmId = useStore((state) => state.algorithmId);
  const operators = useStore((state) => state.operators);
  const output = useMIDI();

  const sendSysex = useCallback(debounce<SendSysexCallback>(({ algorithmId, operators }) => {
    output?.send(createDX7Sysex({ algorithmId, operators }));
  }, 300), [output]);

  useEffect(() => {
    sendSysex({ algorithmId, operators })
  }, [sendSysex, algorithmId, operators]);

  return (
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
  )
}
