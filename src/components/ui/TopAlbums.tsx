'use client'

import { useEffect, useState } from 'react';
import { fetchArtistAlbums } from '@/lib/api/theaudiodb/fetchArtistAlbums';
import Albums from './Albums';
import { Album } from '@/types/Album';
import ImagesSkeleton from '../common/ImagesSkeleton';
import { TopAlbumsProps } from '@/types/TopAlbumsProps';

export default function TopAlbums({ artistIds, title, size }: TopAlbumsProps) {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const allAlbums: Album[] = [];
                for (const artistId of artistIds) {
                    const artistAlbums = await fetchArtistAlbums(artistId);
                    if (artistAlbums) {
                        allAlbums.push(...artistAlbums);
                    }
                }
                if (size !== undefined) {
                    setAlbums(allAlbums.slice(0, size));
                } else {
                    setAlbums(allAlbums);
                }
            } catch (error) {
                console.error('Error fetching albums:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAlbums();
    }, [artistIds, size]);

    return (
        <>
            <h1 className="text-2xl font-semibold mb-4 text-white">{title}</h1>
            {loading ? (
                <div className="albums-grid">
                    <ImagesSkeleton size={size} />
                </div>
            ) : (
                <Albums albums={albums} />
            )}
        </>
    );
}