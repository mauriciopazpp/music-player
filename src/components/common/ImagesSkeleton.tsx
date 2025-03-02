import ImageSkeleton from "./imageSkeleton";

export default function ImagesSkeleton({ size = 10 }) {
    return (
        <>
            {Array.from({ length: size }).map((_, index) => (
                <ImageSkeleton key={index} />
            ))}
        </>
    );
}
