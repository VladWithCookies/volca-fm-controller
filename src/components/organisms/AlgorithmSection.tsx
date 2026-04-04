import clsx from 'clsx';
import * as d3 from 'd3';
import { useRef, useState, useEffect } from 'react';

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
  const [nodes, setNodes] = useState<Node[]>(algorithm.nodes.map((node) => ({ ...node })));

  const links = algorithm.links.map((link) => ({ ...link }));

  useEffect(() => {
    const simulation = d3.forceSimulation<Node>(nodes)
      .alphaDecay(0.1)
      .force('link', d3.forceLink<Node, Link>(links).id(({ id }) => id).distance(100))
      .force('center', d3.forceCenter(width / 2, height / 2).strength(0.5))
      .force('charge', d3.forceManyBody().strength(200))
      .force('collision', d3.forceCollide().radius(60).strength(1));

    simulation.on('tick', () => {
      setNodes([...simulation.nodes()]);
    });

    return () => {
      simulation.stop();
    };
  }, [width, height, algorithm]);

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
                width={60}
                height={60}
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
      {nodes.map(({ id, x, y }) => (
        <Button
          key={id}
          style={{ left: x, top: y }}
          color={algorithm.nodes.find((node) => node.id === id)?.carrier ? 'fuchsia' : 'teal'}
          onClick={() => setCurrentOperatorId(id.toString())}
          className={clsx(
            'absolute size-16 translate-[-50%]',
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
