import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={`${className} text-gray-100 dark:text-white`}>
            Spot the artist
        </Link>
    );
}
