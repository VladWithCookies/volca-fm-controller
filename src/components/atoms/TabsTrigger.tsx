import { Tabs } from 'radix-ui';

interface Props {
  value: string;
  children: React.ReactNode;
}

export default function TabsTrigger({ value, children }: Props) {
  return (
    <Tabs.Trigger
      value={value}
      className="tabs-trigger flex flex-1 items-center justify-center h-20 text-2xl bg-white text-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white transition"
    >
      {children}
    </Tabs.Trigger>
  );
}
