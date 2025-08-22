import clsx from 'clsx';
interface Props {
  children: React.ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button
      type="button"
      className={clsx(
        'flex items-center justify-center size-full',
        'bg-gray-700 text-white',
        'hover:bg-gray-800 focus:bg-gray-800 transition',
      )}
    >
      {children}
    </button>
  );
}
