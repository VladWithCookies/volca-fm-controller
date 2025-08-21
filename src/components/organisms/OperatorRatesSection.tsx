import Section from '@/components/atoms/Section';
import Stepper from '@/components/molecules/Stepper';

export default function OperatorRatesSection() {
  return (
    <Section heading="Operator Rates">
      <ol className="flex size-full">
        <li className="size-full">
          <Stepper />
        </li>
        <li className="size-full">
          <Stepper />
        </li>
        <li className="size-full">
          <Stepper />
        </li>
        <li className="size-full">
          <Stepper />
        </li>
        <li className="size-full">
          <Stepper />
        </li>
        <li className="size-full">
          <Stepper />
        </li>
      </ol>
    </Section>
  );
}
