import express from 'express';

import dotenv from 'dotenv';
import { httpLogger, logger } from './tools/logger';

dotenv.config();

const server = express();

server.use(httpLogger);

server.post('/', function (req, res) {
    res.send('Hello World');
});

server.listen(process.env.PORT, () => {
    logger.info(`Server listening on ${process.env.PORT}... `);
});
