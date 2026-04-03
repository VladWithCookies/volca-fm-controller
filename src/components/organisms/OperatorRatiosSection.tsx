import { memo, useCallback } from 'react';
import { useShallow } from 'zustand/shallow';

import { createIsOperatorCarrierSelector } from '@/utils/selectors';
import useStore from '@/hooks/useStore';
import Section from '@/components/atoms/Section';
import OrderedList from '@/components/atoms/OrderedList';
import ListItem from '@/components/atoms/ListItem';
import Fader from '@/components/molecules/Fader';

interface Props {
  operatorId: string;
}

const RatioFader = memo(({ operatorId }: Props) => {
  const isOperatorCarrierSelector = createIsOperatorCarrierSelector(operatorId);
  const isOperatorCarrier = useStore(isOperatorCarrierSelector);
  const value = useStore((state) => state.operators[operatorId].coarse)
  const setOperatorParam = useStore((state) => state.setOperatorParam);

  const handleChange = useCallback(
    (value: number) => setOperatorParam(operatorId, 'coarse', value),
    [setOperatorParam, operatorId],
  );

  return (
    <Fader
      value={value}
      onChange={handleChange}
      color={isOperatorCarrier ? 'fuchsia' : 'teal'}
    />
  );
})

export default function OperatorRatiosSection() {
  const operatorIds = useStore(useShallow((state) => Object.keys(state.operators)));

  return (
    <Section heading="Operator Ratios">
      <OrderedList>
        {operatorIds.map((operatorId) => (
          <ListItem key={operatorId}>
            <RatioFader operatorId={operatorId} />
          </ListItem>
        ))}
      </OrderedList>
    </Section>
  );
}
