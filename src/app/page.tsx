'use client'
import BadgeGallery from "@/components/ui/badgeGallery";
import SidebarDesktop from "@/components/ui/sidebarDesktop";
import TopArtists from "@/components/ui/topArtists";
import Releases from "@/components/ui/releases";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[16rem_auto]">
      <SidebarDesktop />
      <main className="flex-1 p-10">
        <div className="flex justify-center pb-5">
          <BadgeGallery />
        </div>
        <TopArtists />
        <Releases />
      </main>
    </div>
  );
}
