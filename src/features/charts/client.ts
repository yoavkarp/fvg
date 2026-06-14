import { restClient } from '@polygon.io/client-js';
import { config } from 'dotenv';
config({ debug: false });

if (!process.env.POLYGON_IO_API_KEY) {
    throw new Error("invalid-polygon-io-api-key");
}

console.log(process.env.POLYGON_IO_API_KEY);

export const client = restClient(process.env.POLYGON_IO_API_KEY);