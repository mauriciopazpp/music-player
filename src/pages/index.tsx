import { useMemo } from 'react';
import TopAlbums from "@/components/ui/TopAlbums";
import BadgeGallery from "@/components/ui/BadgeGallery";

export default function Home() {
    const topAlbums = useMemo(() => ['2109614', '112025', '112125'], []);

    return (
        <div className="bg-black">
            <div className="flex justify-center pb-5">
                <BadgeGallery />
            </div>
            <div className="flex-1 p-5 main-background min-h-screen">
                <TopAlbums artistIds={topAlbums} title="Top Albums" />
            </div>
        </div>
    );
}
