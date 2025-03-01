import ImageSkeleton from "./imageSkeleton";

export default function ImagesSkeleton() {
    return (
        <>
            {Array.from({ length: 10 }).map((_, index) => (
                <ImageSkeleton key={index} />
            ))}
        </>
    );
}
