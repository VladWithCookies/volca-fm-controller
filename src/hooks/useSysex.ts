import { useContext } from 'react';

import { createDX7Sysex, type ParamName } from '@/utils/sysex';
import MIDIContext from '@/contexts/MIDIContext';

const useMIDI = () => {
  const MIDIOutput = useContext(MIDIContext);

  const sendSysex = (name: ParamName, value: number) => {
    MIDIOutput?.send(createDX7Sysex(name, value));
  }

  return sendSysex;
}

export default useMIDI;
