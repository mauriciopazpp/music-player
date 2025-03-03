import React from 'react';
import Image from 'next/image';
import { ArtistType } from '@/types/ArtistType';

const HorizontalArtistCard = ({ artist }: { artist: ArtistType }) => {
    return (
        <div key={artist.idArtist} className="horizontal-artist-card">
            <div className="card horizontal-artist-card-section">
                <Image
                    width={50}
                    height={50}
                    alt={`Image of artist ${artist.strArtist}`}
                    src={artist.strArtistThumb}
                    className="horizontal-artist-card-image"
                />
                <div>
                    <div className="horizontal-artist-card-name">
                        {artist.strArtist}
                    </div>
                    <div className="horizontal-artist-card-genre">
                        {artist.strGenre}
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="horizontal-artist-card-country">
                    {artist.strCountry}
                </div>
            </div>
        </div>
    );
};

export default HorizontalArtistCard;
