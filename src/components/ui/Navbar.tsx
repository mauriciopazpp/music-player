import Logo from '../common/logo';
import Search from './Search';
import DropdownUser from './DropdownUser';

export default function Navbar() {
    return (
        <div className="navbar bg-orange-600 shadow-sm flex justify-between items-center">
            <Logo />
            <Search />
            <DropdownUser />
        </div>
    );
}
