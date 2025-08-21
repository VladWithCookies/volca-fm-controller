interface Props {
  levels: React.ReactNode;
  rates: React.ReactNode;
}

export default function OperatorsLayout({ levels, rates }: Props) {
  return (
    <div className="w-screen h-screen overflow-hidden grid grid-cols-9 grid-rows-9">
      <h1 hidden>Operators</h1>
      <div className="col-span-full">Tabs</div>
      <div className="col-span-6 row-span-2">{rates}</div>
      <div className="col-span-3 row-span-4">Algo</div>
      <div className="col-span-6 row-span-6">{levels}</div>
      <div className="col-span-3 row-span-2">Tunning</div>
      <div className="col-span-3 row-span-2">Switches</div>
    </div>
  );
}
