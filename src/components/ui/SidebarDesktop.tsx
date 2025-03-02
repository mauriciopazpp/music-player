import Sidebar from "../common/Sidebar";

export default function SidebarDesktop({ navigation }) {
    return (
        <aside className="bg-neutral-950 text-white hidden md:block h-full w-64">
            <Sidebar navigation={navigation} />
        </aside>
    );
}
