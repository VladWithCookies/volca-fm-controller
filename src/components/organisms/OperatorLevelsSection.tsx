import Section from '@/components/atoms/Section';
import Fader from '@/components/atoms/Fader';

export default function OperatorLevelsSection() {
  return (
    <Section heading="Operator Levels">
      <ol className="flex">
        <li>
          <Fader />
        </li>
        <li>
          <Fader />
        </li>
        <li>
          <Fader />
        </li>
        <li>
          <Fader />
        </li>
        <li>
          <Fader />
        </li>
        <li>
          <Fader />
        </li>
      </ol>
    </Section>
  );
}
