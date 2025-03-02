import Logo from '../common/Logo';
import Search from './Search';
import DropdownUser from './DropdownUser';

export default function Navbar() {
    return (
        <div className="navbar bg-orange-600 shadow-sm flex justify-between items-center px-3 md:px-5 gap-1 md:gap-10">
            <Logo />
            <Search />
            <DropdownUser />
        </div>
    );
}
