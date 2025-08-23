import clsx from 'clsx';
import { Slider } from 'radix-ui';

interface Props {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  color?: 'teal' | 'fuchsia';
}

export default function Fader({
  min = 0,
  max = 99,
  value = 0,
  onChange,
  color = 'teal',
}: Props) {
  const teal = color === 'teal';
  const fuchsia = color === 'fuchsia';

  const handleOnValueChange = ([value]: number[]) => {
    onChange?.(value);
  }

  return (
    <Slider.Root
      className="relative flex flex-col align-center size-full overflow-hidden"
      min={min}
      max={max}
      step={1}
      orientation="vertical"
      value={[value]}
      onValueChange={handleOnValueChange}
    >
			<Slider.Track className={clsx(
        'relative grow',
        'bg-gray-200',
      )}>
				<Slider.Range
          className={clsx(
            'absolute w-full',
            { 'bg-teal-300': teal },
            { 'bg-fuchsia-300': fuchsia },
          )}
        />
			</Slider.Track>
			<Slider.Thumb
        className={clsx(
          'block w-100 h-15',
          'outline-none bg-gray-700',
          'hover:bg-gray-800 focus:bg-gray-800',
        )}
      />
		</Slider.Root>
  );
}
