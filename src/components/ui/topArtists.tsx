'use client'
// import AlbumCard from './topArtists/artisCard';
import ImageSkeleton from '../common/imageSkeleton';

export default function TopArtists() {

    return (
        <>
            <h1 className="text-2xl font-semibold mb-4">Top Artists</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 auto-rows-[1fr] pb-10 z-0">
                <ImageSkeleton />
            </div>
        </>
    );
}
