import TopArtists from "@/components/ui/TopArtists";
import Releases from "@/components/ui/Releases";
import BadgeGallery from "@/components/ui/BadgeGallery";

export default function Home() {
    return (
        <>
            <div className="flex justify-center pb-5">
                <BadgeGallery />
            </div>
            <div className="flex-1 p-10">
                <TopArtists />
                <Releases />
            </div>
        </>
    );
}
