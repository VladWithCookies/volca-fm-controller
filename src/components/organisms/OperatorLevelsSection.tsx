import { createIsOperatorCarrierSelector } from '@/utils/selectors';
import useSysex from '@/hooks/useSysex';
import useStore from '@/hooks/useStore';
import Section from '@/components/atoms/Section';
import OrderedList from '@/components/atoms/OrderedList';
import ListItem from '@/components/atoms/ListItem';
import Fader from '@/components/molecules/Fader';

interface Props {
  value: number;
  operatorId: string;
}

function LevelFader({ value, operatorId }: Props) {
  const isOperatorCarrierSelector = createIsOperatorCarrierSelector(operatorId);
  const isOperatorCarrier = useStore(isOperatorCarrierSelector);
  const setOperatorParam = useStore((state) => state.setOperatorParam);
  const sendSysex = useSysex();

  const handleChange = (value: number) => {
    setOperatorParam(operatorId, 'level', value);
    sendSysex('level', value);
  }

  return (
    <Fader
      value={value}
      onChange={handleChange}
      color={isOperatorCarrier ? 'fuchsia' : 'teal'}
    />
  );
}

export default function OperatorLevelsSection() {
  const operators = useStore((state) => state.operators);

  return (
    <Section heading="Operator Levels">
      <OrderedList>
        {Object.entries(operators).map(([id, operator]) => (
          <ListItem key={id}>
            <LevelFader
              value={operator.level}
              operatorId={id}
            />
          </ListItem>
        ))}
      </OrderedList>
    </Section>
  );
}
