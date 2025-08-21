import Section from '@/components/atoms/Section';
import Switch from '@/components/molecules/Switch';

export default function OperatorSwitchesSection() {
  return (
    <Section
      heading="Operator Switches"
      className="flex flex-row justify-center items-center gap-20"
    >
      <Switch
        name="fixed"
        label="Fixed"
      />
      <Switch
        name="active"
        label="Active"
      />
    </Section>
  );
}
