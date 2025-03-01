'use client'
import { Album } from "@/types/Album";
import Image from "next/image";

export default function AlbumCard({ album }: { album: Album }) {
    return (
        <div key={album.idArtist} className="h-32 w-32 relative">
            <Image
                src={album.strAlbumCDart}
                alt={album.strArtist}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
        </div>
    );
}
