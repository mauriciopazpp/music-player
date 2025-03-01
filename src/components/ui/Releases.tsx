'use client'
import ImageSkeleton from '../common/ImageSkeleton';

export default function Releases() {

    return (
        <>
            <h1 className="text-2xl font-semibold mb-4">Releases</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 auto-rows-[1fr]">
                <ImageSkeleton />
            </div>
        </>
    );
}
