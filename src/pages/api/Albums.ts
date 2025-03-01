import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchArtistAlbums } from '../../lib/api/theaudiodb/fetchArtistAlbums';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { artistId } = req.query;

    try {
        if (artistId && typeof artistId === 'string') {
            const data = await fetchArtistAlbums(artistId);
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
