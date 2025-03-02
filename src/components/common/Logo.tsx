import Link from "next/link";
import { SiHoneygain } from "react-icons/si";

export default function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={`${className} text-gray-100 dark:text-white flex align-middle gap-2 text-xl`}>
            <span className="bee-animation"><SiHoneygain size={24} /></span>
            honey tunes
        </Link>
    );
}
