import * as d3 from 'd3';
import { useMemo } from 'react';

import { teal300 } from '@/constants/colors';
import { rateToTime } from '@/utils/calculations';
import { currentOperatorSelector } from '@/utils/selectors';
import useStore from '@/hooks/useStore';
import useResizeObserver from '@/hooks/useResizeObserver';
import Section from '@/components/atoms/Section';

interface DataPoint {
  x: number;
  y: number;
}

export default function EnvelopeGraphSection() {
  const [containerRef, width, height] = useResizeObserver();
  const currenOperator = useStore(currentOperatorSelector);

  const levels = [
    currenOperator.attackLevel,
    currenOperator.decayLevel,
    currenOperator.sustainLevel,
    currenOperator.releaseLevel,
  ];

  const rates = [
    currenOperator.attackRate,
    currenOperator.decayRate,
    currenOperator.sustainRate,
    currenOperator.releaseRate,
  ];

  const times = rates.reduce<typeof rates>((result, rate, index) => {
    const time = rateToTime(rate);
    const prevTime = index === 0 ? 0 : result[index - 1];

    return [...result, prevTime + time];
  }, []);

  const data = [
    { x: 0, y: 0 },
    { x: times[0], y: levels[0] },
    { x: times[1], y: levels[1] },
    { x: times[2], y: levels[2] },
    { x: times[3], y: levels[3] },
    { x: times[3], y: 0 },
  ];

  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, times[3]])
      .range([0, width]);
  }, [data, width]);

  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, 99])
      .range([height, 99]);
  }, [data, height]);

  const lineBuilder = d3
    .line<DataPoint>()
    .x(({ x }) => xScale(x))
    .y(({ y }) => yScale(y));

  const linePath = lineBuilder(data);

  if (!linePath) return null;

  return (
    <Section
      ref={containerRef}
      heading="Envelope Graph"
    >
      <svg
        width={width}
        height={height}
      >
        <path
          d={linePath}
          fill={teal300}
          stroke={teal300}
          strokeWidth={2}
          opacity={0.8}
        />
      </svg>
    </Section>
  );
}
