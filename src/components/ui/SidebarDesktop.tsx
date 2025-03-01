import Sidebar from "../common/Sidebar";

export default function SidebarDesktop() {
    return (
        <aside className="bg-gray-950 text-white p-5 hidden md:block h-full w-64">
            <Sidebar />
        </aside>
    );
}
