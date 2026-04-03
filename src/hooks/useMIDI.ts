import { useState, useEffect } from 'react';

const useMIDI = () => {
  const [output, setOutput] = useState<MIDIOutput>();

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

  return output;
}

export default useMIDI;
