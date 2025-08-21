import { Tabs } from 'radix-ui';

interface Props {
  value: string;
  children: React.ReactNode;
}

export default function TabsContent({ value, children }: Props) {
  return (
    <Tabs.Content
      value={value}
      className="size-full"
    >
      {children}
    </Tabs.Content>
  );
}
