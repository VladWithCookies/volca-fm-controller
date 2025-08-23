import Section from '@/components/atoms/Section';
import Switch from '@/components/molecules/Switch';
import Stepper from '@/components/molecules/Stepper';

export default function OperatorSwitchesSection() {
  return (
    <Section
      heading="Operator Switches"
      className="flex flex-row justify-center items-center"
    >
      <Switch
        name="fixed"
        label="Fixed"
      />
      <Switch
        name="active"
        label="Active"
      />
      <Stepper />
    </Section>
  );
}
