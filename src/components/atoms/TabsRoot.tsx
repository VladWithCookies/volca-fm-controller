import { Tabs } from 'radix-ui';

interface Props {
  children: React.ReactNode;
}

export default function TabsRoot({ children }: Props) {
  return (
    <Tabs.Root
      defaultValue="operators"
      className="flex flex-col w-screen h-screen"
    >
      {children}
    </Tabs.Root>
  );
}
