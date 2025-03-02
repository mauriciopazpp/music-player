import Badge from "../common/Badge";

export default function BadgeGallery() {
    const badges = [
        "Podcasts",
        "Workout",
        "Party",
        "Energy",
    ];

    return (
        <div className="flex justify-center pt-5 space-x-4">
            {badges.map((message, index) => (
                <Badge key={index} message={message} />
            ))}
        </div>
    );
}
