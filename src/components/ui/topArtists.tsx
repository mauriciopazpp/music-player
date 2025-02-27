'use client'
import { useTopArtists } from '@/lib/api/useTopArtists';
import ImageSkeleton from './topArtists/imageSkeleton';
import ArtistCard from './topArtists/artisCard';

export default function TopArtists() {
    const { artists, loading } = useTopArtists();

    return (
        <>
            <h2 className="text-2xl font-semibold mb-4">Top Artists</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {loading ? <ImageSkeleton /> :
                    artists.map(artist => (
                        <ArtistCard key={`${artist.mbid}${artist.name}`} artist={artist} />
                    ))}
            </div>
        </>
    );
}
