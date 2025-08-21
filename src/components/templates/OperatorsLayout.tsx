interface Props {
  heading: string;
  top: React.ReactNode;
  bottom: React.ReactNode;
  asideTop: React.ReactNode;
  asideMiddle: React.ReactNode;
  asideBottom: React.ReactNode;
}

export default function OperatorsLayout({ heading, top, bottom, asideTop, asideMiddle, asideBottom }: Props) {
  return (
    <div className="grid grid-cols-9 grid-rows-9 size-full overflow-hidden">
      <h1 hidden>
        {heading}
      </h1>
      <div className="col-span-6 row-span-2">
        {top}
      </div>
      <div className="col-span-3 row-span-5">
        {asideTop}
      </div>
      <div className="col-span-6 row-span-7">
        {bottom}
      </div>
      <div className="col-span-3 row-span-2">
        {asideMiddle}
      </div>
      <div className="col-span-3 row-span-2">
        {asideBottom}
      </div>
    </div>
  );
}
