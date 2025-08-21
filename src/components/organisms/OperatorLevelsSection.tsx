import Section from '@/components/atoms/Section';
import Fader from '@/components/atoms/Fader';

export default function OperatorLevelsSection() {
  return (
    <Section heading="Operator Levels">
      <ol className="flex size-full">
        <li className="size-full">
          <Fader />
        </li>
        <li className="size-full">
          <Fader />
        </li>
        <li className="size-full">
          <Fader />
        </li>
        <li className="size-full">
          <Fader />
        </li>
        <li className="size-full">
          <Fader />
        </li>
        <li className="size-full">
          <Fader />
        </li>
      </ol>
    </Section>
  );
}
