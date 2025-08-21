import clsx from 'clsx';

interface Props {
  heading: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section ({ heading, children, className }: Props) {
  return (
    <section className={clsx('size-full', className)}>
      <h2 hidden>
        {heading}
      </h2>
      {children}
    </section>
  );
}
