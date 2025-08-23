import clsx from 'clsx';
import { Toggle } from 'radix-ui';

interface Props {
  name: string;
  label: string;
  value?: unknown;
  options?: [unknown, unknown];
  onChange?: (value: unknown) => void;
}

export default function Switch({
  name,
  label,
  value,
  onChange,
  options = [true, false],
}: Props) {
  const pressed = value === options[0];

  const handlePressedChange = (pressed: boolean) => {
    onChange?.(pressed ? options[0] : options[1]);
  }

  return (
    <div className="flex flex-row justify-center items-center size-full">
      <Toggle.Root
        id={name}
        pressed={pressed}
        onPressedChange={handlePressedChange}
        className={clsx(
          'toggle-root',
          'size-20',
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
