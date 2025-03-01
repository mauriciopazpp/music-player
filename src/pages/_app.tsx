import type { AppProps } from "next/app";
import Navbar from "@/components/ui/Navbar";
import "@/styles/globals.css";
import BadgeGallery from "@/components/ui/BadgeGallery";
import SidebarDesktop from "@/components/ui/SidebarDesktop";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-[16rem_auto]">
                <SidebarDesktop />
                <main className="flex-1 p-10">
                    <div className="flex justify-center pb-5">
                        <BadgeGallery />
                    </div>
                    <div className="content">
                        <Component {...pageProps} />
                    </div>
                </main>
            </div>
        </>
    );
}
