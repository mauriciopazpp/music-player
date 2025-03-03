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
            return
        }
        setIsVisible(true);
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
            className="floating-search-content"
        >
            <div className="floating-search-content-inner">
                {artists.map((artist) => (
                    <div key={artist.idArtist} className="floating-search-content-item">
                        <Link
                            href={`/artist/${artist.idArtist}`}
                            onClick={() => {
                                onSelectArtist();
                                setIsVisible(false);
                            }}
                        >
                            <HorizontalArtistCard artist={artist} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
