import React, { useState, useRef, useEffect } from "react";
import HorizontalArtistCard from "./floatingSearchContent/HorizontalArtistCard";
import { FloatingSearchContentPropsType } from "@/types/FloatingSearchContentPropsType";
import Link from "next/link";

export function FloatingSearchContent({ artists, onSelectArtist }: FloatingSearchContentPropsType) {
    const [isVisible, setIsVisible] = useState(true);
    const searchRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div
            ref={searchRef}
            className="absolute left-0 top-16 w-full bg-neutral-900 border-b-neutral-700 text-white z-20 shadow-2xl shadow-neutral-950"
        >
            <div className="m-6 md:px-60 lg:px-96">
                {artists.map((artist) => (
                    <div key={artist.idArtist} className="artist-section hover:bg-neutral-700 rounded-2xl p-2">
                        <Link
                            href={`/artist/${artist.idArtist}`}
                            onClick={onSelectArtist}
                        >
                            <HorizontalArtistCard artist={artist} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
