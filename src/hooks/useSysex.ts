import { useContext } from 'react';

import { createDX7Sysex } from '@/utils/sysex';
import useStore from '@/hooks/useStore';
import MIDIContext from '@/contexts/MIDIContext';

const useMIDI = () => {
  const MIDIOutput = useContext(MIDIContext);
  const patch = useStore((state) => state);

  const sendSysex = () => {
    MIDIOutput?.send(createDX7Sysex(patch));
  }

  return sendSysex;
}

export default useMIDI;
