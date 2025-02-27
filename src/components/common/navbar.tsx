import Logo from './logo';
import Search from './search';
import Sidebar from './sidebar';

export default function Navbar() {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="navbar bg-orange-600 w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2"><Logo /></div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                            <li>
                                <Search />
                            </li>
                            <li>
                                <Sidebar />
                            </li>
                            {/* <li><a className='text-gray-100 dark:text-white'>Navbar Item 2</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    <li><Search /></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
}
