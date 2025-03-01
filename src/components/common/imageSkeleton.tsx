export default function ImageSkeleton() {
    return (
        <>
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="aspect-square">
                    <div className="animate-pulse bg-gray-300 rounded-lg w-full h-full"></div>
                </div>
            ))}
        </>
    );
}
