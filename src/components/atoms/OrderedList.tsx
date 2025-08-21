interface Props {
  children: React.ReactNode;
}

export default function OrderedList({ children }: Props) {
  return (
    <ol className="flex size-full">
      {children}
    </ol>
  );
}
