import EnvelopeLevelsSection from '@/components/organisms/EnvelopeLevelsSection';
import EnvelopeRatesSection from '@/components/organisms/EnvelopeRatesSection';
import AlgorithmSection from '@/components/organisms/AlgorithmSection';
import EnvelopeGraphSection from '@/components/organisms/EnvelopeGraphSection'
import EnvelopesLayout from '@/components/templates/EnvelopesLayout';

export default function EnvelopesPage() {
  return (
    <EnvelopesLayout
      heading="Envelopers"
      top={<EnvelopeLevelsSection />}
      bottom={<EnvelopeRatesSection />}
      asideTop={<AlgorithmSection className="border-b" />}
      asideBottom={<EnvelopeGraphSection />}
    />
  );
}
