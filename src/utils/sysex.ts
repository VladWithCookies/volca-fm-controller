interface Params {
  operators: State['operators'];
  algorithmId: AlgorithmId;
}

const OPERATOR_MODES = {
  ratio: 0,
  fixed: 1,
}

export const createDX7Sysex = ({ operators, algorithmId }: Params) => {
  const header = [
    240, // SysEx start (0xF0)
    67,  // Yamaha manufacturer ID
    0,   // Device number (MIDI channel 1)
    0,   // Format number (DX7 voice data)
    1,   // Sub-status (voice data)
    27,  // Byte count / format indicator
  ]

  const operatorParams = Object
    .values(operators)
    .reverse() // DX7 accepts operator params backwards
    .reduce<number[]>((result, operator) => [
      ...result,
      operator.attackRate,
      operator.decayRate,
      operator.sustainRate,
      operator.releaseRate,
      operator.attackLevel,
      operator.decayLevel,
      operator.sustainLevel,
      operator.releaseLevel,
      50,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      operator.active ? operator.level : 0,
      OPERATOR_MODES[operator.mode],
      operator.coarse,
      operator.fine,
      operator.tune,
    ], [])

  const globalParams = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    Number(algorithmId) - 1, // DX7 indexes algorithms starting from 0
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
  ];

  const footer = [
    78,  // N
    101, // e
    119, // w
    63,  // space
    80,  // P
    97,  // a
    116, // t
    99,  // c
    104, // h
    63,  // space
    19,
    247, // SysEx end (0xF7)
  ];

  const sysex = [
    ...header,
    ...operatorParams,
    ...globalParams,
    ...footer,
  ];

  console.log(sysex);

  return sysex;
}
