import Sidebar from "../common/Sidebar";
import { NavigationItemType } from '@/types/NavigationItemType';

export default function SidebarDesktop({ navigation }: { navigation: NavigationItemType[] }) {
    return (
        <aside className="bg-neutral-950 text-white hidden md:block h-full w-64">
            <Sidebar navigation={navigation} />
        </aside>
    );
}
