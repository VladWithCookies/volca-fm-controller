import Section from '@/components/atoms/Section';
import OrderedList from '@/components/atoms/OrderedList';
import ListItem from '@/components/atoms/ListItem';
import Fader from '@/components/molecules/Fader';

export default function EnvelopeRatesSection() {
  return (
    <Section heading="Envelope Rates">
      <OrderedList>
        <ListItem>
          <Fader />
        </ListItem>
        <ListItem>
          <Fader />
        </ListItem>
        <ListItem>
          <Fader />
        </ListItem>
        <ListItem>
          <Fader />
        </ListItem>
      </OrderedList>
    </Section>
  );
}
