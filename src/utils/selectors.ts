import ALGORITHMS from '@/constants/algorithms';

export const currentOperatorSelector = (state: State) => state.operators[state.currentOperatorId]
export const algorithmSelector = (state: State) => ALGORITHMS[state.algorithmId]

export const createIsOperatorCarrierSelector = (operatorId: string) => (state: State) => {
  const algorithm = algorithmSelector(state);

  return algorithm.nodes.find((node) => node.id.toString() === operatorId)?.carrier;
};
