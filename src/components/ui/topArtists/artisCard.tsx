'use client'
import Image from 'next/image';

export default function ArtistCard({ artist }) {
    return (
        <div key={`${artist.mbid}${artist.name}`} className="h-32 w-32 relative">
            <Image
                src={artist.image["3"]["#text"] || "/placeholder.jpg"}
                alt={artist.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
        </div>
    );
}
