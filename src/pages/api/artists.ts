import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchAudioDB } from '../../lib/api/fetchAudioDB';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { artistId, mbArtistId } = req.query;

    try {
        if (artistId && typeof artistId === 'string') {
            const data = await fetchAudioDB('artistId', artistId);
            return res.status(200).json(data);
        }

        if (mbArtistId && typeof mbArtistId === 'string') {
            const data = await fetchAudioDB('mbArtistId', mbArtistId);
            return res.status(200).json(data);
        }

        return res.status(400).json({
            error: 'Invalid params. Please provide artistId or mbArtistId.',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal error.' });
    }
}
