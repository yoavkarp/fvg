
export interface FVGSignal {
    type: 'bull' | 'bear';
    date: Date;
    barIndex: number;
    top: number;
    bottom: number;
    avg: number;
    atr: number;
    trailingStop: number;
    tsReached: boolean;
}

export interface FVGOptions {
    filterWidth?: number;
    atrPeriod?: number;
    tsReset?: 'Every Signals' | 'Inverse Signals';
    tsMult?: number;
}