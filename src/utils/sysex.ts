const DX7_OPERATOR_PARAM_ADDRESS_OFFSETS = {
  attackRate: 0x00,
  decayRate: 0x01,
  sustainRate: 0x02,
  releaseRate: 0x03,
  attackLevel: 0x04,
  decayLevel: 0x05,
  sustainLevel: 0x06,
  releaseLevel: 0x07,
  level: 0x10,
  mode: 0x11,
  coarse: 0x12,
  fine: 0x13,
  tune: 0x14,
};

const DX7_GLOBAL_PARAM_ADDRESSES = {
  algorithm: 0x3886,
};

type OperatorParamName = keyof typeof DX7_OPERATOR_PARAM_ADDRESS_OFFSETS;
type GlobalParamName = keyof typeof DX7_GLOBAL_PARAM_ADDRESSES;

export type ParamName = OperatorParamName | GlobalParamName;

function getDX7ParamAddress(name: ParamName, operatorId?: string) {
  if (!operatorId) return DX7_GLOBAL_PARAM_ADDRESSES[name as GlobalParamName];

  const operatorNumber = Number(operatorId);
  const operatorBaseAddress = 0x3800 + (6 - operatorNumber) * 0x15;

  return operatorBaseAddress + DX7_OPERATOR_PARAM_ADDRESS_OFFSETS[name as OperatorParamName];
};

export const createDX7Sysex = (
  name: ParamName,
  value: number,
  operatorId?: string,
) => {
  const address = getDX7ParamAddress(name, operatorId);

  const message = [
    0xF0, // SysEx start
    0x43, // Yamaha ID
    0x00, // MIDI channel 1
    0x09, // DX7 ID
    0x20, // Bulk voice data send
    (address >> 7) & 0x7F, // Most significant byte address
    address & 0x7F, // Least significant byte address
    value & 0x7F, // Parameter Value need to be 7bit
    0xF7, // SysEx end
  ];

  return message;
};
