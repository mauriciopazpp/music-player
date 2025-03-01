"use client";
import React from "react";
import { ArtistDBaudio } from "@/types/Artist";

interface ArtistListProps {
    artists: ArtistDBaudio[];
}

export function ArtistList({ artists }: ArtistListProps) {
    return (
        <ul className="mt-4 space-y-2">
            {artists.map((artist) => (
                <span />
            ))}
        </ul>
    );
}
