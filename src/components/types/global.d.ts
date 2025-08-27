declare global {
  type Enumerate<
    N extends number,
    Acc extends number[] = []
  > = Acc['length'] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>;

  type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>> | T;

  type Stringify<T> = `${T}`;

  type AlgorithmId = Stringify<NumberRange<1, 32>>;

  interface State {
    currentOperatorId: string;
    algorithmId: AlgorithmId;
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
    setAlgorithmId: (algorithmId: AlgorithmId) => void;
    setOperatorParam: (id: string, key: string, value: number) => void;
    setCurrentOperatorParam: (key: string, value: unknown) => void;
  }
}

export {};
