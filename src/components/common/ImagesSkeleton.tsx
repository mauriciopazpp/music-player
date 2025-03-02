import ImageSkeleton from "./imageSkeleton";

export default function ImagesSkeleton({ size = 30 }) {
    return (
        <>
            {Array.from({ length: size }).map((_, index) => (
                <ImageSkeleton key={index} />
            ))}
        </>
    );
}
