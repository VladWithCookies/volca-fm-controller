import useStore from '@/hooks/useStore';
import { currentOperatorSelector } from '@/utils/selectors'
import Section from '@/components/atoms/Section';
import Fader from '@/components/molecules/Fader';

export default function OperatorTunningSection() {
  const currentOperator = useStore(currentOperatorSelector);
  const setCurrentOperatorParam = useStore((state) => state.setCurrentOperatorParam);

  return (
    <Section
      heading="Operator Tunning"
      className="flex"
    >
      <Fader
        min={-7}
        max={7}
        value={currentOperator.tune}
        onChange={(value) => setCurrentOperatorParam('tune', value)}
      />
      <Fader
        value={currentOperator.fine}
        onChange={(value) => setCurrentOperatorParam('fine', value)}
      />
    </Section>
  );
}
