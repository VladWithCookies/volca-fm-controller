import { currentOperatorSelector } from '@/utils/selectors'
import useStore from '@/hooks/useStore';
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
        max={14}
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
