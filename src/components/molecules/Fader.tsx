import clsx from 'clsx';
import { Slider } from 'radix-ui';

export default function Fader() {
  return (
    <Slider.Root
      className="relative flex flex-col align-center size-full overflow-hidden"
      defaultValue={[0]}
      max={99}
      step={1}
      orientation="vertical"
    >
			<Slider.Track className={clsx(
        'relative grow',
        'bg-gray-200',
      )}>
				<Slider.Range
          className={clsx(
            'absolute w-full',
            'bg-teal-300',
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
