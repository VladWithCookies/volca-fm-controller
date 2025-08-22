import clsx from 'clsx';
import { TriangleUpIcon, TriangleDownIcon } from '@radix-ui/react-icons';

import Button from '@/components/atoms/Button';

export default function Stepper() {
  return (
    <div className="flex flex-col size-full">
      <Button fluid>
        <TriangleUpIcon className="size-10" />
      </Button>
      <span
        className={clsx(
          'inline-flex items-center justify-center size-full',
          'text-2xl'
        )}>
        99
      </span>
      <Button fluid>
        <TriangleDownIcon className="size-10" />
      </Button>
    </div>
  );
}
