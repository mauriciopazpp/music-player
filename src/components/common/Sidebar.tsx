import { FaPlus } from 'react-icons/fa';
import NavItem from './NavItem';
import PlaylistItem from './PlaylistItem';
import { NavigationPropsType } from '@/types/NavigationPropsType';

export default function Sidebar({ navigation }: NavigationPropsType) {
    const playlists: string[] = ['2024 Recaps', 'Heavy Metal', 'Rock', 'Favorites', 'Marriage'];

    return (
        <aside className="sidebar">
            <nav>
                <ul className="space-y-1">
                    {navigation?.map((item, index) => (
                            <NavItem href={item.href} key={index} icon={item.icon} label={item.title} />
                        ))
                    }
                </ul>
            </nav>

            <div className="mt-4">
                <button className="sidebar-new-playlist">
                    <FaPlus size={16} />
                    New Playlist
                </button>
            </div>

            <div className="mt-6">
                <p className="sidebar-playlist">Your main playlists</p>
                <ul className="space-y-1">
                    {playlists.map((playlist, index) => (
                        <PlaylistItem key={index} playlist={playlist} trackCount={index * 14} />
                    ))}
                </ul>
            </div>
        </aside>
    );
}
