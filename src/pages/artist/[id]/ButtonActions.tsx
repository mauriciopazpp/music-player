import { ArtistType } from '@/types/ArtistType';
import { FaPlay, FaSubscript } from 'react-icons/fa';

export default function ButtonActions({ }: { artist: ArtistType }) {

    return (
        <div className='p-5 flex gap-2 bg-black'>
            <button className="btn btn-lg border-black bg-dark-900">
                <FaPlay className="mr-2" />
                Play
            </button>
            <button className="btn btn-lg border-orange-500 text-orange-500 font-light">
                <FaSubscript className="mr-2" />
                Subscribe 27,5 mi
            </button>
        </div>
    );
}
