'use client'

import { useEffect, useState } from 'react';
import { fetchArtistAlbums } from '@/lib/api/theaudiodb/fetchArtistAlbums';
import Albums from './Albums';
import { AlbumType } from '@/types/AlbumType';
import ImagesSkeleton from '../common/ImagesSkeleton';
import { TopAlbumsPropsType } from '@/types/TopAlbumsPropsType';

export default function TopAlbums({ artistIds, title, size }: TopAlbumsPropsType) {
    const [albums, setAlbums] = useState<AlbumType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const allAlbums: AlbumType[] = [];
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
            <h2 className="h2">{title}</h2>
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