import { config } from "dotenv";
import { scan } from "./functions/scan.js";

config({ debug: false });

async function main() {

    scan({
        onSignal: (ticker, signal) => {
            console.log(`[${ticker.symbol}] ${signal.type === 'bear' ? 'SHORT' : 'LONG'} @ ${signal.date} ATR:${signal.atr}`)
        }
    });
}

main();