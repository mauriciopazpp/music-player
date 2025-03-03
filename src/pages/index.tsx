import { useMemo } from 'react';
import TopAlbums from "@/components/ui/TopAlbums";
import BadgeGallery from "@/components/ui/BadgeGallery";

export default function Home() {
    const topAlbums = useMemo(() => ['112126', '112025', '2109611'], []);
    const forYou = useMemo(() => ['2109615', '112021', '112121'], []);

    return (
        <div className="bg-black">
            <BadgeGallery />
            <div className="main-background min-h-screen flex-1 p-5">
                <TopAlbums artistIds={topAlbums} title="Top Albums" size={12} />
                <div className='text-neutral-200 pb-10'>
                    <h2 className="h2">Lorem Ipsum</h2>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sint, ipsam illo minus voluptatem molestiae aut consequatur laboriosam a nulla commodi? Expedita delectus tempora beatae et vitae exercitationem non in.
                </div>
                <TopAlbums artistIds={forYou} title="For you" size={12} />
            </div>
        </div>
    );
}
