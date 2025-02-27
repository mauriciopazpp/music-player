/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Artist } from '@/types/Artist';

export const useTopArtists = () => {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTopArtists = async () => {
            try {
                const response = await fetch("/api/top-artists");
                if (!response.ok) {
                    throw new Error('Failed to fetch top artists');
                }
                const data = await response.json();
                setArtists(data.artists.artist);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTopArtists();
    }, []);

    return { artists, loading, error };
};
