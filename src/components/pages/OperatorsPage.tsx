import OperatorRatiosSection from '@/components/organisms/OperatorRatiosSection';
import OperatorLevelsSection from '@/components/organisms/OperatorLevelsSection';
import AlgorithmSection from '@/components/organisms/AlgorithmSection';
import OperatorSwitchesSection from '@/components/organisms/OperatorSwitchesSection';
import OperatorTunningSection from '@/components/organisms/OperatorTunningSection';
import OperatorsLayout from '@/components/templates/OperatorsLayout';

export default function OperatorsPage() {
  return (
    <OperatorsLayout
      heading="Operators"
      top={<OperatorRatiosSection />}
      bottom={<OperatorLevelsSection />}
      asideTop={<AlgorithmSection className="border-b" />}
      asideMiddle={<OperatorSwitchesSection />}
      asideBottom={<OperatorTunningSection />}
    />
  );
}
