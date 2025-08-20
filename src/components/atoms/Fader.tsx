import { Slider } from 'radix-ui';

export default function Fader() {
  return (
    <Slider.Root
      className="relative flex flex-col align-center w-50 h-100"
      defaultValue={[0]}
      max={99}
      step={1}
      orientation="vertical"
    >
			<Slider.Track className="relative grow bg-gray-100">
				<Slider.Range className="absolute w-full bg-teal-300" />
			</Slider.Track>
			<Slider.Thumb className="block w-50 h-15 outline-none bg-gray-900" />
		</Slider.Root>
  );
}
