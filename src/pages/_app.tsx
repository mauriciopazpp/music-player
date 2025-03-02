import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/ui/Navbar";
import SidebarDesktop from "@/components/ui/SidebarDesktop";
import Dock from "@/components/common/Dock";
import { useNavigation as navigation } from "@/lib/hooks/useNavigation";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-[16rem_auto]">
                <SidebarDesktop navigation={navigation} />
                <main className="dark:bg-neutral-950">
                    <div className="content">
                        <Component {...pageProps} />
                    </div>
                </main>
            </div>
            <Dock navigation={navigation} />
        </>
    );
}
