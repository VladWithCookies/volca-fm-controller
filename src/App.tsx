import { useState, useEffect } from 'react';

import { createDX7Sysex } from '@/utils/sysex';
import useStore from '@/hooks/useStore';
import TabsRoot from '@/components/atoms/TabsRoot';
import TabsList from '@/components/atoms/TabsList';
import TabsTrigger from '@/components/atoms/TabsTrigger';
import TabsContent from '@/components/atoms/TabsContent';
import OperatorsPage from '@/components/pages/OperatorsPage';
import EnvelopesPage from '@/components/pages/EnvelopesPage';

export default function App() {
  const [output, setOutput] = useState<MIDIOutput>();
  const algorithmId = useStore((state) => state.algorithmId);
  const operators = useStore((state) => state.operators);

  useEffect(() => {
    if (navigator.requestMIDIAccess) {
      const onMIDISuccess = (access: MIDIAccess) => {
        const outputs = Array.from(access.outputs.values());

        if (outputs.length > 0) {
          setOutput(outputs[0]);
        }
      }

      const onMIDIFailure = () => {
        alert('Could not access your MIDI device.');
      }

      navigator.requestMIDIAccess({ sysex: true }).then(onMIDISuccess, onMIDIFailure);
    } else {
      alert('Web MIDI API is not supported in this browser.');
    }
  }, []);

  useEffect(() => {
    output?.send(createDX7Sysex({ algorithmId, operators }));
  }, [output, algorithmId, operators]);

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
