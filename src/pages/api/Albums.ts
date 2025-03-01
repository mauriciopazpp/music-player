import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchAudioDB } from '../../lib/api/theaudiodb/fetchArtistByName';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { artistId, albumId, mbReleaseGroupId } = req.query;

    try {
        if (artistId && typeof artistId === 'string') {
            const data = await fetchAudioDB('artistId', artistId);
            return res.status(200).json(data);
        }

        if (albumId && typeof albumId === 'string') {
            const data = await fetchAudioDB('albumId', albumId);
            return res.status(200).json(data);
        }

        if (mbReleaseGroupId && typeof mbReleaseGroupId === 'string') {
            const data = await fetchAudioDB('mbReleaseGroupId', mbReleaseGroupId);
            return res.status(200).json(data);
        }

        return res.status(400).json({
            error: 'Invalid params. Inform artistId, albumId or mbReleaseGroupId.',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal error.' });
    }
}
