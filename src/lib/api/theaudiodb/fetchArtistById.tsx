import { ArtistType } from "@/types/ArtistType";
import { fetchData } from "./fetchData";

export const fetchArtistById = async (id: string): Promise<ArtistType | null> => {
    if (!id) {
        throw new Error("Artist ID is required");
    }

    const data = await fetchData<{ artists: ArtistType[] }>(`artist.php?i=${encodeURIComponent(id)}`);
    return data?.artists?.[0] ?? null;
};
