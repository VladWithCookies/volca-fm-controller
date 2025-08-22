export const ALGORITHM_1 = {
  NODES: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  LINKS: [
    { source: 2, target: 1 },
    { source: 1, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
};

export const ALGORITHM_2 = {
  NODES: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  LINKS: [
    { source: 1, target: 3 },
    { source: 2, target: 1 },
    { source: 2, target: 2 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
  ],
};

export const ALGORITHM_27 = {
  NODES: [
    { id: 1, carrier: true },
    { id: 2, carrier: true },
    { id: 3, carrier: false },
    { id: 4, carrier: true },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  LINKS: [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 2, target: 4 },
    { source: 3, target: 3 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
  ],
};
