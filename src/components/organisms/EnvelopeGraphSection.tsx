import * as d3 from 'd3';
import { useMemo } from 'react';

import { teal300 } from '@/constants/colors';
import useResizeObserver from '@/hooks/useResizeObserver';
import Section from '@/components/atoms/Section';

const data = [
  { x: 0, y: 0 },
  { x: 20, y: 99 },
  { x: 40, y: 40 },
  { x: 60, y: 40 },
  { x: 99, y: 0 },
];

interface DataPoint {
  x: number;
  y: number;
}

export default function EnvelopeGraphSection() {
  const [containerRef, width, height] = useResizeObserver();

  const xMax = d3.extent(data, ({ x }) => x)[1];
  const yMax = d3.extent(data, ({ y }) => y)[1];

  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, xMax || 0])
      .range([0, width]);
  }, [data, width]);

  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, yMax || 0])
      .range([height, 0]);
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
          stroke={teal300}
          fill={teal300}
          strokeWidth={2}
        />
      </svg>
    </Section>
  );
}
