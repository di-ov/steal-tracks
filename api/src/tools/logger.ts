import pino from 'pino';
export const logger = pino();

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const httpLogger = require('express-pino-logger')();
