import { GetStocksAggregates200ResponseAllOfResultsInner } from "@polygon.io/client-js";
import { readFileSync } from 'fs'
import { cwd } from "process";
import path from "path";
import { isRegularMarket, m30toh4, toNyTimes } from "./features/charts/charts.utils.js";
import { Chart } from "./features/charts/charts.interfaces.js";
import { chartsService } from "./features/charts/charts.service.js";
async function main() {

    const tickers = [{ symbol: 'NVDA' }]; //await symbolsService.getAll();

    const charts: Chart[] = await chartsService.get4hChart('NVDA');
    console.log(charts.map(toNyTimes), charts);
}

main();