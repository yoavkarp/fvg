import { scan } from "./functions/scan.js";

async function main() {
    scan({
        onSignal: (ticker, signal) => {
            console.log(`[${ticker.symbol}] ${signal.type === 'bear' ? 'SHORT' : 'LONG'} @ ${signal.date} ATR:${signal.atr}`)
        }
    });
}

main();