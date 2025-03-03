import Sidebar from "../common/Sidebar";
import { NavigationItemType } from '@/types/NavigationItemType';

export default function SidebarDesktop({ navigation }: { navigation: NavigationItemType[] }) {
    return (
        <aside className="sidebar-desktop">
            <Sidebar navigation={navigation} />
        </aside>
    );
}
