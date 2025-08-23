import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: React.ReactNode;
  fluid?: boolean;
  color?: 'gray' | 'teal' | 'fuchsia';
  className?: string;
}

export default function Button({
  disabled,
  children,
  fluid,
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
        { 'opacity-50': disabled },
        { 'bg-gray-700 text-white': gray },
        { 'hover:bg-gray-800 focus:bg-gray-800': gray && !disabled},
        { 'bg-teal-300': teal },
        { 'hover:bg-teal-400 focus:bg-teal-400': teal && !disabled},
        { 'bg-fuchsia-300': fuchsia },
        { 'hover:bg-fuchsia-400 focus:bg-fuchsia-400': fuchsia && !disabled},
        { 'size-full': fluid },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
