import OperatorsLayout from '@/components/templates/OperatorsLayout';
import OperatorLevelsSection from '@/components/organisms/OperatorLevelsSection';
import OperatorRatesSection from '@/components/organisms/OperatorRatesSection';

export default function OperatorsPage() {
  return (
    <OperatorsLayout
      levels={<OperatorLevelsSection />}
      rates={<OperatorRatesSection />}
    />
  );
}
