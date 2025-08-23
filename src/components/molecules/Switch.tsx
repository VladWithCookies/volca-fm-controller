import clsx from 'clsx';
import { Toggle } from 'radix-ui';

interface Props {
  name: string;
  label: string;
}

export default function Switch({ name, label }: Props) {
  return (
    <div className="flex flex-row justify-center items-center size-full">
      <Toggle.Root
        id={name}
        className={clsx(
          'toggle-root size-20',
          'bg-gray-200',
          'hover:bg-gray-300 focus:bg-gray-300 transition'
        )}
      />
      <label
        htmlFor={name}
        className={clsx(
          'flex items-center ml-5',
          'text-2xl'
        )}
      >
        {label}
      </label>
    </div>
  );
}
