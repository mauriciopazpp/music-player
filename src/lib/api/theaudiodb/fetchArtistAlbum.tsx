import { AlbumType } from "@/types/AlbumType";
import { fetchData } from "./fetchData";

export const fetchArtistAlbum = async (albumId: string): Promise<AlbumType | null> => {
    if (!albumId) {
        throw new Error("Album ID is required");
    }

    const data = await fetchData<{ album: AlbumType[] }>(`album.php?m=${encodeURIComponent(albumId)}`);
    return data?.album?.[0] ?? null;
};
