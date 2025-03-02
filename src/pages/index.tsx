import { useMemo } from 'react';
import TopAlbums from "@/components/ui/TopAlbums";
import BadgeGallery from "@/components/ui/BadgeGallery";

export default function Home() {
    const topAlbums = useMemo(() => ['2109611', '112025', '112125'], []);
    const forYou = useMemo(() => ['2109615', '112021', '112121'], []);

    return (
        <div className="bg-black">
            <div className="flex justify-center pb-5">
                <BadgeGallery />
            </div>
            <div className="flex-1 p-5 main-background min-h-screen">
                <TopAlbums artistIds={topAlbums} title="Top Albums" size={12} />
                <div className='text-neutral-200 pb-10'>
                    <h1 className="text-2xl font-semibold mb-4 text-white">Lorem Ipsum</h1>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sint, ipsam illo minus voluptatem molestiae aut consequatur laboriosam a nulla commodi? Expedita delectus tempora beatae et vitae exercitationem non in.
                </div>
                <TopAlbums artistIds={forYou} title="For you" size={12} />
            </div>
        </div>
    );
}
