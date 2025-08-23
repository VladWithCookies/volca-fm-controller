import clsx from 'clsx';
import { TriangleUpIcon, TriangleDownIcon } from '@radix-ui/react-icons';

import Button from '@/components/atoms/Button';

interface Props {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
};

export default function Stepper({
  min = 0,
  max = 32,
  value = 0,
  onChange,
}: Props) {
  const handleIncrement = () => {
    if (value !== max) {
      onChange?.(value + 1);
    }
  }

  const handleDecrement = () => {
    if (value !== min) {
      onChange?.(value - 1);
    }
  }

  return (
    <div className="flex flex-col size-full">
      <Button
        fluid
        disabled={value === max}
        onClick={handleIncrement}
      >
        <TriangleUpIcon className="size-10" />
      </Button>
      <span
        className={clsx(
          'inline-flex items-center justify-center size-full',
          'text-2xl'
        )}>
        {value}
      </span>
      <Button
        fluid
        disabled={value === min}
        onClick={handleDecrement}
      >
        <TriangleDownIcon className="size-10" />
      </Button>
    </div>
  );
}
