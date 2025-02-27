'use client'
import { useTopArtists } from '@/lib/api/useTopArtists';  // Importando o hook customizado
import Image from "next/image";

export default function TopArtists() {
    const { artists, loading, error } = useTopArtists();  // Usando o hook

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Top Artists</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {artists.map((artist) => (
                    <li key={`${artist.mbid}${artist.name}`} className="flex flex-col items-center">
                        <p className="text-center text-lg font-medium">{artist.name}</p>

                        {/* <Image
                            src={artist.image["3"]["#text"]}
                            alt={artist.name}
                            width={100}
                            height={100}
                            className="rounded-full"
                        /> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
