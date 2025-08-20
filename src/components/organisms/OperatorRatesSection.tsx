import Section from '@/components/atoms/Section';
import Stepper from '@/components/molecules/Stepper';

export default function OperatorRatesSection() {
  return (
    <Section heading="Operator Rates">
      <ol className="flex">
        <li>
          <Stepper />
        </li>
        <li>
          <Stepper />
        </li>
        <li>
          <Stepper />
        </li>
        <li>
          <Stepper />
        </li>
        <li>
          <Stepper />
        </li>
        <li>
          <Stepper />
        </li>
      </ol>
    </Section>
  );
}
