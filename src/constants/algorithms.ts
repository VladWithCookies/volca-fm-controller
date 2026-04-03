const ALGORITHM_1 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 2, target: 1 },
    { source: 1, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_2 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 3 },
    { source: 2, target: 1 },
    { source: 2, target: 2 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
  ],
} as const;

const ALGORITHM_3 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: false },
    { id: 4, carrier: true },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 4 },
    { source: 2, target: 3 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_4 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: false },
    { id: 4, carrier: true },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 4 },
    { source: 2, target: 3 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
    { source: 5, target: 6 },
  ],
} as const;

const ALGORITHM_5 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: true },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 3, target: 4 },
    { source: 3, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_6 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: true },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 3, target: 4 },
    { source: 3, target: 5 },
    { source: 3, target: 6 },
    { source: 5, target: 6 },
  ],
} as const;

const ALGORITHM_7 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 3, target: 4 },
    { source: 3, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_8 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 3, target: 4 },
    { source: 3, target: 5 },
    { source: 4, target: 4 },
    { source: 5, target: 6 },
  ],
} as const;

const ALGORITHM_9 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 2, target: 2 },
    { source: 3, target: 4 },
    { source: 3, target: 5 },
    { source: 5, target: 6 },
  ],
} as const;

const ALGORITHM_10 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: false },
    { id: 4, carrier: true },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 4 },
    { source: 2, target: 3 },
    { source: 3, target: 3 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
  ],
} as const;

const ALGORITHM_11 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: false },
    { id: 4, carrier: true },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 4 },
    { source: 2, target: 3 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_12 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 2, target: 2 },
    { source: 3, target: 4 },
    { source: 3, target: 5 },
    { source: 3, target: 6 },
  ],
} as const;

const ALGORITHM_13 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 3, target: 4 },
    { source: 3, target: 5 },
    { source: 3, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_14 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_15 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 2, target: 2 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
  ],
} as const;

const ALGORITHM_16 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: false },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 1, target: 5 },
    { source: 3, target: 4 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_17 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: false },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 1, target: 5 },
    { source: 2, target: 2 },
    { source: 3, target: 4 },
    { source: 5, target: 6 },
  ],
} as const;

const ALGORITHM_18 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: false },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 1, target: 4 },
    { source: 3, target: 3 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
  ],
} as const;

const ALGORITHM_19 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: false },
    { id: 4, carrier: true },
    { id: 5, carrier: true },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 4 },
    { source: 2, target: 3 },
    { source: 2, target: 3 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_20 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: true },
    { id: 3, carrier: false },
    { id: 4, carrier: true },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 2, target: 3 },
    { source: 2, target: 4 },
    { source: 3, target: 3 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
  ],
} as const;

const ALGORITHM_21 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: true },
    { id: 3, carrier: false },
    { id: 4, carrier: true },
    { id: 5, carrier: true },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 2, target: 3 },
    { source: 2, target: 4 },
    { source: 3, target: 3 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
    { source: 5, target: 6 },
  ],
} as const;

const ALGORITHM_22 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: true },
    { id: 5, carrier: true },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 3, target: 4 },
    { source: 3, target: 6 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_23 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: true },
    { id: 3, carrier: false },
    { id: 4, carrier: true },
    { id: 5, carrier: true },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 2, target: 4 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_24 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: true },
    { id: 3, carrier: true },
    { id: 4, carrier: true },
    { id: 5, carrier: true },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 3, target: 6 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_25 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: true },
    { id: 3, carrier: true },
    { id: 4, carrier: true },
    { id: 5, carrier: true },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_26 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: true },
    { id: 3, carrier: false },
    { id: 4, carrier: true },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 2, target: 4 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_27 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: true },
    { id: 3, carrier: false },
    { id: 4, carrier: true },
    { id: 5, carrier: false },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 2, target: 4 },
    { source: 3, target: 3 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
  ],
} as const;

const ALGORITHM_28 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: false },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: true },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 3, target: 4 },
    { source: 3, target: 6 },
    { source: 4, target: 5 },
    { source: 5, target: 5 },
  ],
} as const;

const ALGORITHM_29 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: true },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: true },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 3, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_30 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: true },
    { id: 3, carrier: true },
    { id: 4, carrier: false },
    { id: 5, carrier: false },
    { id: 6, carrier: true },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 3, target: 6 },
    { source: 4, target: 5 },
    { source: 5, target: 5 },
  ],
} as const;

const ALGORITHM_31 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: true },
    { id: 3, carrier: true },
    { id: 4, carrier: true },
    { id: 5, carrier: true },
    { id: 6, carrier: false },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

const ALGORITHM_32 = {
  nodes: [
    { id: 1, carrier: true },
    { id: 2, carrier: true },
    { id: 3, carrier: true },
    { id: 4, carrier: true },
    { id: 5, carrier: true },
    { id: 6, carrier: true },
  ],
  links: [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 5, target: 6 },
    { source: 6, target: 6 },
  ],
} as const;

export default {
  1: ALGORITHM_1,
  2: ALGORITHM_2,
  3: ALGORITHM_3,
  4: ALGORITHM_4,
  5: ALGORITHM_5,
  6: ALGORITHM_6,
  7: ALGORITHM_7,
  8: ALGORITHM_8,
  9: ALGORITHM_9,
  10: ALGORITHM_10,
  11: ALGORITHM_11,
  12: ALGORITHM_12,
  13: ALGORITHM_13,
  14: ALGORITHM_14,
  15: ALGORITHM_15,
  16: ALGORITHM_16,
  17: ALGORITHM_17,
  18: ALGORITHM_18,
  19: ALGORITHM_19,
  20: ALGORITHM_20,
  21: ALGORITHM_21,
  22: ALGORITHM_22,
  23: ALGORITHM_23,
  24: ALGORITHM_24,
  25: ALGORITHM_25,
  26: ALGORITHM_26,
  27: ALGORITHM_27,
  28: ALGORITHM_28,
  29: ALGORITHM_29,
  30: ALGORITHM_30,
  31: ALGORITHM_31,
  32: ALGORITHM_32,
};
