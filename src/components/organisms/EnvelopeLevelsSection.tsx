import useStore from '@/hooks/useStore';
import { currentOperatorSelector } from '@/utils/selectors'
import Section from '@/components/atoms/Section';
import OrderedList from '@/components/atoms/OrderedList';
import ListItem from '@/components/atoms/ListItem';
import Fader from '@/components/molecules/Fader';

export default function EnvelopeLevelsSection() {
  const currentOperator = useStore(currentOperatorSelector);
  const setCurrentOperatorParam = useStore((state) => state.setCurrentOperatorParam);

  return (
    <Section heading="Envelope Levels">
      <OrderedList>
        <ListItem>
          <Fader
            value={currentOperator.attackLevel}
            onChange={(value) => setCurrentOperatorParam('attackLevel', value)}
          />
        </ListItem>
        <ListItem>
          <Fader
            value={currentOperator.decayLevel}
            onChange={(value) => setCurrentOperatorParam('decayLevel', value)}
          />
        </ListItem>
        <ListItem>
          <Fader
            value={currentOperator.sustainLevel}
            onChange={(value) => setCurrentOperatorParam('sustainLevel', value)}
          />
        </ListItem>
        <ListItem>
          <Fader
            value={currentOperator.releaseLevel}
            onChange={(value) => setCurrentOperatorParam('releaseLevel', value)}
          />
        </ListItem>
      </OrderedList>
    </Section>
  );
}
