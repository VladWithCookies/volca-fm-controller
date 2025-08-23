import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fluid?: boolean;
  disabled?: boolean;
  color?: 'gray' | 'teal' | 'fuchsia';
  className?: string;
}

export default function Button({
  children,
  fluid,
  disabled,
  color = 'gray',
  className,
  ...props
}: Props) {
  const gray = color === 'gray';
  const teal = color === 'teal';
  const fuchsia = color === 'fuchsia';

  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        'flex items-center justify-center',
        'font-bold transition',
        { 'size-full': fluid },
        { 'opacity-50': disabled },
        { 'bg-gray-700 text-white': gray },
        { 'hover:bg-gray-800 focus:bg-gray-800': gray && !disabled},
        { 'bg-teal-300': teal },
        { 'hover:bg-teal-300 focus:bg-teal-300': teal && !disabled},
        { 'bg-fuchsia-300': fuchsia },
        { 'hover:bg-fuchsia-300 focus:bg-fuchsia-300': fuchsia && !disabled},
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
