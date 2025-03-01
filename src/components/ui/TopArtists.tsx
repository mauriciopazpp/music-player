'use client'
// import AlbumCard from './topArtists/artisCard';
import ImageSkeleton from "../common/ImagesSkeleton";

export default function TopArtists() {

    return (
        <>
            <h1 className="text-2xl font-semibold mb-4">Top Artists</h1>
            <div className="albums-grid">
                <ImageSkeleton />
            </div>
        </>
    );
}
