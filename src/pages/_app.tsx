import type { AppProps } from "next/app";
import Navbar from "@/components/ui/Navbar";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}
