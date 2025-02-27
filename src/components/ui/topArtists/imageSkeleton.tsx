export default function ImageSkeleton() {
    return (
        Array.from({ length: 16 }).map((_, index) => (
            <div
                key={index}
                className="animate-pulse bg-gray-300 rounded-lg h-32 w-32"
            ></div>
        ))
    );
}
