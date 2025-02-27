import type { NextApiRequest, NextApiResponse } from 'next'

const AUDIO_LAST_FM_KEY = process.env.AUDIO_LAST_FM_KEY;

const fetchTopArtists = async () => {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${AUDIO_LAST_FM_KEY}&format=json`);
    if (!response.ok) {
        throw new Error('Failed to fetch data from Last.fm');
    }
    return response.json();
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = await fetchTopArtists();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}