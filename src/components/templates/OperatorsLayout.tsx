interface Props {
  levels: React.ReactNode;
  rates: React.ReactNode;
}

export default function OperatorsLayout({ levels, rates }: Props) {
  return (
    <div>
      <h1 hidden>Operators</h1>
      {rates}
      {levels}
    </div>
  );
}
