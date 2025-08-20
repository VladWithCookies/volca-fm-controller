import { TriangleUpIcon, TriangleDownIcon } from '@radix-ui/react-icons';

import Button from '@/components/atoms/Button';

export default function Stepper() {
  return (
    <div className="flex flex-col w-50">
      <Button>
        <TriangleUpIcon className="h-10 w-10" />
      </Button>
      <span className="inline-flex items-center justify-center h-10 text-xl">
        99
      </span>
      <Button>
        <TriangleDownIcon className="h-10 w-10" />
      </Button>
    </div>
  );
}
