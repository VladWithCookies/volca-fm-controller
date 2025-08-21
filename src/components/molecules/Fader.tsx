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
			<Slider.Track className="relative grow bg-gray-100">
				<Slider.Range className="absolute w-full bg-teal-300" />
			</Slider.Track>
			<Slider.Thumb className="block w-100 h-15 outline-none bg-gray-700 hover:bg-gray-800 focus:bg-gray-800" />
		</Slider.Root>
  );
}
