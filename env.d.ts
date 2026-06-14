declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly FVG_FILTER_WIDTH?: string;
        readonly FVG_ATR_PERIOD?: string;
        readonly FVG_RESET_TS?: "Inverse Signals" | "Every Signals";
        readonly FVG_MULTIPLIER_TS?: string;
        readonly POLYGON_IO_API_KEY?: string;
    }
}