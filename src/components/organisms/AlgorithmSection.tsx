import clsx from 'clsx';
import * as d3 from 'd3';
import { useRef, useMemo } from 'react';

import { algorithmSelector } from '@/utils/selectors';
import useStore from '@/hooks/useStore';
import useResizeObserver from '@/hooks/useResizeObserver';
import Section from '@/components/atoms/Section';
import Button from '@/components/atoms/Button';

interface Node extends d3.SimulationNodeDatum {
  id: number;
  carrier: boolean;
}

type Link = d3.SimulationLinkDatum<Node>;

interface Props {
  className?: string;
}

const AlgorithmSection = ({ className }: Props) => {
  const svgRef = useRef(null);
  const algorithm = useStore(algorithmSelector);
  const operators = useStore((state) => state.operators);
  const currentOperatorId = useStore((state) => state.currentOperatorId)
  const setCurrentOperatorId = useStore((state) => state.setCurrentOperatorId);
  const [containerRef, width, height] = useResizeObserver();

  const links = algorithm.links.map((link) => ({ ...link }));

  const nodes = useMemo<Node[]>(() => {
    const nodes = algorithm.nodes.map((node) => ({ ...node }));

    const simulation = d3.forceSimulation<Node>(nodes)
      .force('collide', d3.forceCollide().radius(100).strength(1))
      .force('link', d3.forceLink<Node, Link>(links).id(({ id }) => id).distance(150))
      .force('charge', d3.forceManyBody().strength(200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .stop();

    for (let i = 0; i < 100; i++) {
      simulation.tick();
    }

    return nodes;
  }, [width, height]);

  return (
    <Section
      ref={containerRef}
      heading="Algorithm"
      className={clsx('relative', className)}
    >
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="absolute"
      >
        {links.map((link, index) => {
          const source = nodes.find((node: Node) => node.id === link.source);
          const target = nodes.find((node: Node) => node.id === link.target);

          if (!source || !target) return null;

          if (source.id === target.id) {
            return (
              <rect
                key={index}
                x={source.x}
                y={source.y}
                width={70}
                height={70}
                fill="none"
                stroke="black"
              />
            );
          }

          return (
            <line
              key={index}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              stroke="black"
            />
          );
        })}
      </svg>
      {nodes.map(({ id, x, y, carrier }) => (
        <Button
          key={id}
          style={{ left: x, top: y }}
          color={carrier ? 'fuchsia' : 'teal'}
          onClick={() => setCurrentOperatorId(id.toString())}
          className={clsx(
            'absolute size-20 translate-[-50%]',
            { 'opacity-50': !operators[id].active },
            { 'border-4 border-dashed': id.toString() ===  currentOperatorId },
          )}
        >
          {id}
        </Button>
      ))}
    </Section>
  );
};

export default AlgorithmSection;
