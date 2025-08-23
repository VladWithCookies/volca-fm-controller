import useStore from '@/hooks/useStore';
import Section from '@/components/atoms/Section';
import OrderedList from '@/components/atoms/OrderedList';
import ListItem from '@/components/atoms/ListItem';
import Fader from '@/components/molecules/Fader';

export default function OperatorRatiosSection() {
  const operators = useStore((state) => state.operators);
  const setOperatorParam = useStore((state) => state.setOperatorParam);

  return (
    <Section heading="Operator Ratios">
      <OrderedList>
        {Object.entries(operators).map(([id, operator]) => (
          <ListItem key={id}>
            <Fader
              value={operator.coarse}
              onChange={(value) => setOperatorParam(id, 'coarse', value)}
            />
          </ListItem>
        ))}
      </OrderedList>
    </Section>
  );
}
