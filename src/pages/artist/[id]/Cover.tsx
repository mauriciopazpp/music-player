import Image from 'next/image';
import { ArtistDBaudio } from '@/types/Artist';
import { useState } from 'react';

export default function Cover({ artist }: { artist: ArtistDBaudio }) {
    const [expanded, setExpanded] = useState(false);

    const handleViewMore = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`relative w-full transition-all duration-500 ${expanded ? 'min-h-[700px]' : 'min-h-[500px]'}`}>
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={artist.strArtistFanart3}
                    alt={artist.strArtist}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 z-10 text-white">
                <h1 className="font-bold text-5xl">{artist.strArtist}</h1>
                <div className="mt-2 max-w-lg">
                    <div className="overflow-hidden transition-all duration-500">
                        <p className={`text-sm ${expanded ? 'max-h-[500px]' : 'line-clamp-3'}`}>
                            {artist.strBiographyEN}
                        </p>
                    </div>
                    <button
                        className="mt-2 text-sm font-bold hover:underline"
                        onClick={handleViewMore}
                    >
                        {expanded ? 'LESS' : 'MORE'}
                    </button>
                </div>
            </div>
        </div>
    );
}
