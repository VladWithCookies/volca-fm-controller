import OperatorLevelsSection from '@/components/organisms/OperatorLevelsSection';
import OperatorRatesSection from '@/components/organisms/OperatorRatesSection';
import AlgorithmSection from '@/components/organisms/AlgorithmSection';
import OperatorTunningSection from '@/components/organisms/OperatorTunningSection';
import OperatorSwitchesSection from '@/components/organisms/OperatorSwitchesSection';

import OperatorsLayout from '@/components/templates/OperatorsLayout';

export default function OperatorsPage() {
  return (
    <OperatorsLayout
      heading="Operators"
      top={<OperatorRatesSection />}
      bottom={<OperatorLevelsSection />}
      asideTop={<AlgorithmSection />}
      asideMiddle={<OperatorSwitchesSection />}
      asideBottom={<OperatorTunningSection />}
    />
  );
}
