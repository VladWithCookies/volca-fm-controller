import OperatorLevelsSection from '@/components/organisms/OperatorLevelsSection';
import OperatorRatiosSection from '@/components/organisms/OperatorRatiosSection';
import AlgorithmSection from '@/components/organisms/AlgorithmSection';
import OperatorTunningSection from '@/components/organisms/OperatorTunningSection';
import OperatorSwitchesSection from '@/components/organisms/OperatorSwitchesSection';

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
