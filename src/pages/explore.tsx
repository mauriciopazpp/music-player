import { useMemo } from 'react';
import TopAlbums from "@/components/ui/TopAlbums";

export default function Explore() {
    const topAlbums = useMemo(() => ['2109190', '112094', '112190'], []);

    return (
        <div className="bg-black">
            <div className="flex-1 p-5 main-background min-h-screen">
                <TopAlbums artistIds={topAlbums} title="Explore" />
            </div>
        </div>
    );
}
