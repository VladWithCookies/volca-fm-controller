import { currentOperatorSelector } from '@/utils/selectors'
import useStore from '@/hooks/useStore';
import Section from '@/components/atoms/Section';
import Switch from '@/components/molecules/Switch';
import Stepper from '@/components/molecules/Stepper';

export default function OperatorSwitchesSection() {
  const algorithmId = useStore((state) => state.algorithmId);
  const currentOperator = useStore(currentOperatorSelector);
  const setAlgorithmId = useStore((state) => state.setAlgorithmId);
  const setCurrentOperatorParam = useStore((state) => state.setCurrentOperatorParam);

  return (
    <Section
      heading="Operator Switches"
      className="flex flex-row justify-center items-center relative bg-white "
    >
      <Switch
        name="fixed"
        label="Fixed"
        value={currentOperator.mode}
        options={['ratio', 'fixed']}
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
        value={Number(algorithmId)}
        onChange={(value) => setAlgorithmId(value.toString() as AlgorithmId)}
      />
    </Section>
  );
}
