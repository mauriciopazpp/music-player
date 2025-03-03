import Image from 'next/image';
import { ArtistType } from '@/types/ArtistType';
import { useState } from 'react';

export default function Cover({ artist }: { artist: ArtistType }) {
    const [expanded, setExpanded] = useState(false);

    if (!artist) {
        return <div>Artist data is not available</div>;
    }

    const handleViewMore = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`artist-cover ${expanded ? 'min-h-[700px]' : 'min-h-[500px]'}`}>
            <div className="artist-cover-image">
                <Image
                    src={artist?.strArtistFanart3}
                    alt={`Image of ${artist?.strArtist || 'Artist'}`}
                    layout="fill"
                    objectFit="cover"
                    className="artist-image"
                />
                <div className="artist-title" />
            </div>
            <div className="artist-bio">
                <h1 className="h1">{artist.strArtist}</h1>
                <div className="artist-bio-container">
                    <div className="artist-bio-text">
                        <p className={`text-sm ${expanded ? 'max-h-[500px]' : 'line-clamp-3'}`}>
                            {artist.strBiographyEN}
                        </p>
                    </div>
                    <button
                        className="artist-more"
                        onClick={handleViewMore}
                    >
                        {expanded ? 'LESS' : 'MORE'}
                    </button>
                </div>
            </div>
        </div>
    );
}
