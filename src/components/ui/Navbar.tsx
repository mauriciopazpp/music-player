import Logo from '../common/Logo';
import Search from './Search';
import DropdownUser from './DropdownUser';

export default function Navbar() {
    return (
        <div className="navbar">
            <Logo />
            <Search />
            <DropdownUser />
        </div>
    );
}
