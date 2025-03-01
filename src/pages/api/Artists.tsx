import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchArtistByName } from '../../lib/api/theaudiodb/fetchArtistByName';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { artist } = req.query;

    try {
        if (!artist || Array.isArray(artist)) {
            return res.status(400).json({
                error: 'Invalid params. Please provide a valid artistName.',
            });
        }

        const data = await fetchArtistByName(artist);

        if (!data) {
            return res.status(404).json({ error: 'Artist not found.' });
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error('Error in API handler:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}
