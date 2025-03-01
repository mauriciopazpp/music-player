import React from 'react';
import Image from 'next/image';
import { ArtistDBaudio } from '@/types/Artist';

const HorizontalArtistCard = ({ artist }: { artist: ArtistDBaudio }) => {
    return (
        <div key={artist.idArtist} className="horizontal-artst-card flex justify-between items-center">
            <div className="card flex flex-row align-center items-center">
                <Image
                    width={50}
                    height={50}
                    alt={artist.strArtist}
                    src={artist.strArtistThumb}
                    className='rounded-full mr-4'
                />
                <div>
                    <div className="artist-name font-bold">
                        {artist.strArtist}
                    </div>
                    <div className="genre text-sm text-gray-400">
                        {artist.strGenre}
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="country text-sm text-gray-400">
                    {artist.strCountry}
                </div>
            </div>
        </div>
    );
};

export default HorizontalArtistCard;
