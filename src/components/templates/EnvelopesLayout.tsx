interface Props {
  heading: string;
  top: React.ReactNode;
  bottom: React.ReactNode;
  asideTop: React.ReactNode;
  asideBottom: React.ReactNode;
}

export default function EnvelopesLayout({ heading, top, bottom, asideTop, asideBottom }: Props) {
  return (
    <div className="grid grid-cols-8 grid-rows-2 size-full overflow-hidden">
      <h1 hidden>
        {heading}
      </h1>
      <div className="col-span-5">
        {top}
      </div>
      <div className="col-span-3">
        {asideTop}
      </div>
      <div className="col-span-5">
        {bottom}
      </div>
      <div className="col-span-3">
        {asideBottom}
      </div>
    </div>
  );
}
