import { ArtistType } from '@/types/ArtistType';
import { FaPlay, FaSubscript } from 'react-icons/fa';

export default function ButtonActions({ }: { artist: ArtistType }) {

    return (
        <div className='artist'>
            <button className="artist-play bg-dark-900">
                <FaPlay className="mr-2" />
                Play
            </button>
            <button className="artist-subscribe">
                <FaSubscript className="mr-2" />
                Subscribe 27,5 mi
            </button>
        </div>
    );
}
