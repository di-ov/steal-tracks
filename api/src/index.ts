import express from 'express';

import dotenv from 'dotenv';
import { httpLogger, logger } from './tools/logger';
import { downloadMp3 } from './youtube-dl/youtube-dl';
import * as bodyParser from 'body-parser';

dotenv.config();

const server = express();

server.use(bodyParser.json());

server.use(httpLogger);

server.post('/download-one', async function (req, res) {
    const url = req.body.url;

    if (url != null) {
        const result = await downloadMp3(url);

        res.status(200).send(result);
    } else {
        throw new Error('URL not fould');
    }
});

server.listen(process.env.PORT, () => {
    logger.info(`Server listening on ${process.env.PORT}... `);
});
