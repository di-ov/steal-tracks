import { spawn } from 'child_process';
import { logger } from '../tools/logger';

async function runYoutubeMp3Dl(url: string): Promise<string> {
    logger.info('Running the youtube-dl binary.');
    // ./youtube-dl -f bestaudio --extract-audio --audio-format mp3 --audio-quality 0 --print-json -o '/home/di-ov/%(title)s.%(ext)s' "https://www.youtube.com/watch?v=qzL9xn2fjDQ"
    // Most params are based on: https://askubuntu.com/questions/634584/how-to-download-youtube-videos-as-a-best-quality-audio-mp3-using-youtube-dl
    const command = spawn('youtube-dl', [
        '-f',
        'bestaudio',
        '--extract-audio',
        '--audio-format',
        'mp3',
        '--audio-quality',
        '0',
        url,
    ]);

    return new Promise((resolve, reject) => {
        let stdout = '';
        let stderr = '';

        command.stdout.on('data', (data) => {
            stdout += data;
        });

        command.stderr.on('data', (err) => {
            stderr += err;
        });

        command.on('close', (code) => {
            console.log(stdout);
            if (code === 0) {
                resolve(stdout);
            } else {
                logger.info(
                    `Youtube-dl binary exited with non-zero code - ${code} .`
                );

                reject(stderr);
            }
        });
    });
}

export async function downloadMp3(url: string): Promise<string> {
    try {
        return await runYoutubeMp3Dl(url);
    } catch (error) {
        logger.info(error);
    }
}
