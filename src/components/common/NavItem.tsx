import React from 'react';
import { NavItemPropsType } from "@/types/NavItemPropsType";
import Link from 'next/link';

const NavItem: React.FC<NavItemPropsType> = ({ href, icon: Icon, label }) => (
    <li className="navitem">
        <Link href={href} className="navitem-link">
            <Icon size={20} />
            {label}
        </Link>
    </li>
);

export default NavItem;
