import Link from "next/link";

type BadgeType = 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';

interface BadgeProps {
    type: BadgeType;
    message?: string;
}

const badgeClasses: Record<BadgeType, string> = {
    primary: "badge-primary",
    secondary: "badge-secondary",
    accent: "badge-accent",
    neutral: "badge-neutral",
    info: "badge-info",
    success: "badge-success",
    warning: "badge-warning",
    error: "badge-error",
};

export default function Badge({ type, message }: BadgeProps) {
    const badgeClass = badgeClasses[type];
    const displayMessage = message || type.charAt(0).toUpperCase() + type.slice(1);

    return (
        <Link href={`/`} className={`badge badge-dash ${badgeClass}`}>
            {displayMessage}
        </Link>
    );
}
