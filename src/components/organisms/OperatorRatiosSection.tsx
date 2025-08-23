import Section from '@/components/atoms/Section';
import OrderedList from '@/components/atoms/OrderedList';
import ListItem from '@/components/atoms/ListItem';
import Stepper from '@/components/molecules/Stepper';

export default function OperatorRatiosSection() {
  return (
    <Section heading="Operator Ratios">
      <OrderedList>
        <ListItem>
          <Stepper />
        </ListItem>
        <ListItem>
          <Stepper />
        </ListItem>
        <ListItem>
          <Stepper />
        </ListItem>
        <ListItem>
          <Stepper />
        </ListItem>
        <ListItem>
          <Stepper />
        </ListItem>
        <ListItem>
          <Stepper />
        </ListItem>
      </OrderedList>
    </Section>
  );
}
