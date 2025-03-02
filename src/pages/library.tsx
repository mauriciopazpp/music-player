import { useMemo } from 'react';
import TopAlbums from "@/components/ui/TopAlbums";

export default function Library() {
    const topAlbums = useMemo(() => ['2109634', '112024', '112121'], []);

    return (
        <div className="bg-black">
            <div className="flex-1 p-5 main-background min-h-screen">
                <TopAlbums artistIds={topAlbums} title="Library" />
            </div>
        </div>
    );
}
