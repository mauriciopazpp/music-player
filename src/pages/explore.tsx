import { useMemo } from 'react';
import TopAlbums from "@/components/ui/TopAlbums";

export default function Explore() {
    const topAlbums = useMemo(() => ['117193', '117194', '117183'], []);

    return (
        <div className="bg-black">
            <div>
                <div className="hero h-[400px] bg-gradient-to-b from-transparent to-neutral-900 group-hover:opacity-90 transition-opacity duration-500">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Explore!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-neutral-content">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 p-5 main-background min-h-screen">
                <TopAlbums artistIds={topAlbums} title="Explore" />
            </div>
        </div>
    );
}
