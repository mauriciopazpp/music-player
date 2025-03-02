import Link from "next/link";

interface BadgeProps {
    message?: string;
}

export default function Badge({ message }: BadgeProps) {
    const displayMessage = message;

    return (
        <Link href={`/`} className="badge badge-neutral">
            {displayMessage}
        </Link>
    );
}
