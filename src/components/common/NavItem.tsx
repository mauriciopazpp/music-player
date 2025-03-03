import React from 'react';
import { NavItemPropsType } from "@/types/NavItemPropsType";
import Link from 'next/link';

const NavItem: React.FC<NavItemPropsType> = ({ href, icon: Icon, label }) => (
    <li className="rounded hover:bg-neutral-800 transition-colors duration-200">
        <Link href={href} className="flex items-center gap-2 text-sm font-medium p-3">
            <Icon size={20} />
            {label}
        </Link>
    </li>
);

export default NavItem;
