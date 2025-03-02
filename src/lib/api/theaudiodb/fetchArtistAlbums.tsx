import { AlbumType } from "@/types/AlbumType";
import { fetchData } from "./fetchData";

export const fetchArtistAlbums = async (id: string): Promise<AlbumType[] | null> => {
    if (!id) {
        throw new Error("Artist ID is required");
    }

    const data = await fetchData<{ album: AlbumType[] }>(`album.php?i=${encodeURIComponent(id)}`);
    return data?.album ?? null;
};
