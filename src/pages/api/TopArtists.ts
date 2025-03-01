import type { NextApiRequest, NextApiResponse } from 'next'

const fetchTopArtists = async () => {

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