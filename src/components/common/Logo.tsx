import Link from "next/link";
import { SiHoneygain } from "react-icons/si";

export default function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={`${className ? className : ""} logo`}>
            <span className="bee-animation"><SiHoneygain size={24} /></span>
            honey tunes
        </Link>
    );
}
