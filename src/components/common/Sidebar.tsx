import { FaHome, FaSearch, FaMusic } from 'react-icons/fa';

export default function Sidebar() {
    return (
        <div className="h-full">
            <nav>
                <ul>
                    <li className="pt-8 p-5 hover:bg-neutral-700 transition">
                        <a href="#home" className="flex items-center">
                            <FaHome size={24} className="mr-2" />
                            Start
                        </a>
                    </li>
                    <li className="p-5 hover:bg-neutral-700 transition">
                        <a href="#explore" className="flex items-center">
                            <FaSearch size={24} className="mr-2" />
                            Explore
                        </a>
                    </li>
                    <li className="p-5 hover:bg-neutral-700 transition">
                        <a href="#library" className="flex items-center">
                            <FaMusic size={24} className="mr-2" />
                            Library
                        </a>
                    </li>
                </ul>
            </nav>
            {/* Botão para nova playlist */}
            <div className="pt-4 py-5 px-2">
                <button className="w-full btn btn-neutral bg-neutral-900 text-white border-neutral-900">
                    + New Playlist
                </button>
            </div>
            {/* Seção de playlists */}
            <div className="pt-0 px-5">
                <p className="font-semibold mb-2 pt-4">Your main playlists</p>
                <div className="pb-5">
                    <ul>
                        {['2024 Recaps', 'Heavy Metal', 'Rock', 'Favorites', 'Marriage'].map((playlist, index) => (
                            <li key={index} className="mb-2 py-2">
                                <a href="#">
                                    {playlist}
                                    <div className="text-neutral-500 text-sm">{(index * 14)} tracks</div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
