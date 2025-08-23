import useStore from '@/hooks/useStore';
import { currentOperatorSelector } from '@/utils/selectors'
import Section from '@/components/atoms/Section';
import OrderedList from '@/components/atoms/OrderedList';
import ListItem from '@/components/atoms/ListItem';
import Fader from '@/components/molecules/Fader';

export default function EnvelopeRatesSection() {
  const currentOperator = useStore(currentOperatorSelector);
  const setCurrentOperatorParam = useStore((state) => state.setCurrentOperatorParam);

  return (
    <Section heading="Envelope Rates">
      <OrderedList>
        <ListItem>
          <Fader
            value={currentOperator.attackRate}
            onChange={(value) => setCurrentOperatorParam('attackRate', value)}
          />
        </ListItem>
        <ListItem>
          <Fader
            value={currentOperator.decayRate}
            onChange={(value) => setCurrentOperatorParam('decayRate', value)}
          />
        </ListItem>
                <ListItem>
          <Fader
            value={currentOperator.sustainRate}
            onChange={(value) => setCurrentOperatorParam('sustainRate', value)}
          />
        </ListItem>
        <ListItem>
          <Fader
            value={currentOperator.releaseRate}
            onChange={(value) => setCurrentOperatorParam('releaseRate', value)}
          />
        </ListItem>
      </OrderedList>
    </Section>
  );
}
