import { FaHome, FaSearch, FaMusic } from 'react-icons/fa';
import { NavigationItemType } from '@/types/NavigationItemType';

export const useNavigation: NavigationItemType[] = [
    {
        title: "Start",
        href: "/",
        icon: FaHome,
    },
    {
        title: "Explore",
        href: "/explore",
        icon: FaSearch,
    },
    {
        title: "Library",
        href: "/library",
        icon: FaMusic,
    },
];
