import clsx from 'clsx';

interface Props {
  heading: string;
  children: React.ReactNode;
  ref?: React.RefObject<null>;
  className?: string;
}

export default function Section ({ ref, heading, children, className }: Props) {
  return (
    <section
      ref={ref}
      className={clsx('size-full', className)}
    >
      <h2 hidden>
        {heading}
      </h2>
      {children}
    </section>
  );
}
