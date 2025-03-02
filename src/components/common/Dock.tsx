import { NavigationPropsType } from "@/types/NavigationPropsType";
import Link from "next/link";

export default function Dock({ navigation }: NavigationPropsType) {
    return navigation ? (
        <div className="dock bg-neutral text-neutral-content">
            {navigation.map((item, index) => {
                const Icon = item.icon;
                return (
                    <Link href={item.href} key={index} className="dock-item">
                        <span>{Icon && <Icon />}</span>
                        <span className="dock-label">{item.title}</span>
                    </Link>
                );
            })}
        </div>
    ) : null;
}
