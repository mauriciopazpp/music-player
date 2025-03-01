import { Album } from "@/types/Album";

export const fetchArtistAlbums = async (id: string): Promise<Album[] | null> => {
    if (!id) {
        throw new Error("Artist ID is required");
    }

    const url = `https://www.theaudiodb.com/api/v1/json/2/album.php?i=${encodeURIComponent(id)}`;
    console.log("Fetching albums:", url);

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error fetching albums: ${id} - Status: ${response.status}`);
        }

        const data = await response.json();

        return data.album ?? null;
    } catch (error) {
        console.error("Error fetching artist albums:", error);
        return null;
    }
};
