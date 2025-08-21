import { Tabs } from 'radix-ui';

interface Props {
  children: React.ReactNode;
}

export default function TabsList({ children }: Props) {
  return (
    <Tabs.List className="flex">
      {children}
    </Tabs.List>
  );
}
