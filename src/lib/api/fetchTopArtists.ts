import type { NextApiRequest, NextApiResponse } from 'next';

const AUDIO_LAST_FM_KEY = process.env.AUDIO_LAST_FM_KEY;

if (!AUDIO_LAST_FM_KEY) {
    throw new Error('Please define the AUDIO_LAST_FM_KEY environment variable.');
}

const fetchTopArtists = async () => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${AUDIO_LAST_FM_KEY}&format=json`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to fetch data from Last.fm: ${errorData.message || 'Unknown error'}`);
    }

    return response.json();
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = await fetchTopArtists();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}
