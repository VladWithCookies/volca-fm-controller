interface Props {
  heading: string;
  children: React.ReactNode;
}

export default function Section ({ heading, children }: Props) {
  return (
    <section className="size-full">
      <h2 hidden>
        {heading}
      </h2>
      {children}
    </section>
  );
}
