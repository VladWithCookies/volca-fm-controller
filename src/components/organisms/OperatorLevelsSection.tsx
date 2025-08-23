import useStore from '@/hooks/useStore';
import Section from '@/components/atoms/Section';
import OrderedList from '@/components/atoms/OrderedList';
import ListItem from '@/components/atoms/ListItem';
import Fader from '@/components/molecules/Fader';

export default function OperatorLevelsSection() {
  const operators = useStore((state) => state.operators);
  const setOperatorParam = useStore((state) => state.setOperatorParam);

  return (
    <Section heading="Operator Levels">
      <OrderedList>
        {Object.entries(operators).map(([id, operator]) => (
          <ListItem key={id}>
            <Fader
              value={operator.level}
              onChange={(value) => setOperatorParam(id, 'level', value)}
            />
          </ListItem>
        ))}
      </OrderedList>
    </Section>
  );
}
