"use client";
import React from "react";
import HorizontalArtistCard from "./floatingSearchContent/HorizontalArtistCard";
import { ArtistListProps } from "@/types/ArtistListProps";
import Link from "next/link";

export function FloatingSearchContent({ artists }: ArtistListProps) {
    return (
        <div className="absolute left-0 top-16 w-full bg-gray-900 border-b-2 border-b-gray-700 text-white z-20">
            <div className="m-6 md:px-60 lg:px-96">
                {artists.map((artist) => (
                    <div key={artist.idArtist} className="artist-section hover:bg-gray-700 rounded-2xl p-2">
                        <Link
                            href={"/artist/" + artist.idArtist}
                            key={artist.idArtist}>
                            <HorizontalArtistCard artist={artist} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
