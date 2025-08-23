declare global {
  interface State {
    currentOperatorId: string;
    algorithm: number;
    operators: {
      [key: string]: {
        coarse: number;
        level: number;
        mode: 'ratio' | 'fixed';
        active: boolean;
        tune: number;
        fine: number;
        attackLevel: number;
        decayLevel: number;
        sustainLevel: number;
        releaseLevel: number;
        attackRate: number;
        decayRate: number;
        sustainRate: number;
        releaseRate: number;
      },
    },
    setCurrentOperatorId: (currentOperatorId: string) => void;
    setAlgorithm: (algorithm: number) => void;
    setOperatorParam: (id: string, key: string, value: number) => void;
    setCurrentOperatorParam: (key: string, value: unknown) => void;
  }
}

export {};
