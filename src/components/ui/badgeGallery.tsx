import Badge from "../common/badge";

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
                <Badge key={index} type="primary" message={message} />
            ))}
        </div>
    );
}
