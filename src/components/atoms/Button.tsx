import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  color?: 'gray' | 'teal' | 'fuchsia';
}

export default function Button({ children, className, fluid, color = 'gray', ...props }: Props) {
  const gray = color === 'gray';
  const teal = color === 'teal';
  const fuchsia = color === 'fuchsia';

  return (
    <button
      type="button"
      className={clsx(
        'flex items-center justify-center',
        'font-bold transition',
        { 'bg-gray-700 text-white': gray },
        { 'hover:bg-gray-800 focus:bg-gray-800': gray },
        { 'bg-teal-300': teal },
        { 'hover:bg-teal-400 focus:bg-teal-400': teal },
        { 'bg-fuchsia-300': fuchsia },
        { 'hover:bg-fuchsia-400 focus:bg-fuchsia-400': fuchsia },
        { 'size-full': fluid },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
