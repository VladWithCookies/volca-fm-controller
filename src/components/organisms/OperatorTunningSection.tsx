import Section from '@/components/atoms/Section';
import Fader from '@/components/molecules/Fader';

export default function OperatorTunningSection() {
  return (
    <Section
      heading="Operator Tunning"
      className="flex"
    >
      <Fader />
      <Fader />
      <Fader />
    </Section>
  );
}
