import Badge from "../common/Badge";

export default function BadgeGallery() {
    const badges = [
        "Podcasts",
        "Workout",
        "Party",
        "Energy",
    ];

    return (
        <div className="badges">
            {badges.map((message, index) => (
                <Badge key={index} message={message} />
            ))}
        </div>
    );
}
