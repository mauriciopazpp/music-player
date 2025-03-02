import Sidebar from "../common/Sidebar";

export default function SidebarDesktop() {
    return (
        <aside className="bg-neutral-950 text-white hidden md:block h-full w-64">
            <Sidebar />
        </aside>
    );
}
