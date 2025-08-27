import { createContext } from 'react';

const MIDIContext = createContext<MIDIOutput | undefined>(undefined);

export default MIDIContext;
