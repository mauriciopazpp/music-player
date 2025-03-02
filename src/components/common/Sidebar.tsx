import { FaPlus } from 'react-icons/fa';
import NavItem from './NavItem';
import PlaylistItem from './PlaylistItem';
import { NavigationPropsType } from '@/types/NavigationPropsType';

export default function Sidebar({ navigation }: NavigationPropsType) {
    const playlists: string[] = ['2024 Recaps', 'Heavy Metal', 'Rock', 'Favorites', 'Marriage'];

    return (
        <aside className="h-full w-64 bg-neutral-900 text-gray-400 p-4 flex flex-col">
            <nav>
                <ul className="space-y-1">
                    {navigation?.map((item, index) => (
                            <NavItem href={item.href} key={index} icon={item.icon} label={item.title} />
                        ))
                    }
                </ul>
            </nav>

            <div className="mt-4">
                <button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white rounded-md py-2 flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer">
                    <FaPlus size={16} />
                    New Playlist
                </button>
            </div>

            <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3">Your main playlists</p>
                <ul className="space-y-1">
                    {playlists.map((playlist, index) => (
                        <PlaylistItem key={index} playlist={playlist} trackCount={index * 14} />
                    ))}
                </ul>
            </div>
        </aside>
    );
}
