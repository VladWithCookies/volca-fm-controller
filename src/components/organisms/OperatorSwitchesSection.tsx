import useStore from '@/hooks/useStore';
import { currentOperatorSelector } from '@/utils/selectors'
import Section from '@/components/atoms/Section';
import Switch from '@/components/molecules/Switch';
import Stepper from '@/components/molecules/Stepper';

export default function OperatorSwitchesSection() {
  const algorithm = useStore((state) => state.algorithm);
  const currentOperator = useStore(currentOperatorSelector);
  const setAlgorithm = useStore((state) => state.setAlgorithm);
  const setCurrentOperatorParam = useStore((state) => state.setCurrentOperatorParam);

  return (
    <Section
      heading="Operator Switches"
      className="flex flex-row justify-center items-center"
    >
      <Switch
        name="fixed"
        label="Fixed"
        value={currentOperator.mode}
        options={['ration', 'fixed']}
        onChange={(value) => setCurrentOperatorParam('mode', value)}
      />
      <Switch
        name="active"
        label="Active"
        value={currentOperator.active}
        options={[true, false]}
        onChange={(value) => setCurrentOperatorParam('active', value)}
      />
      <Stepper
        min={1}
        max={32}
        value={algorithm}
        onChange={setAlgorithm}
      />
    </Section>
  );
}
