import { ArtistDBaudio } from "@/types/Artist";

export const fetchArtistById = async (id: string): Promise<ArtistDBaudio | null> => {
    if (!id) {
        throw new Error("Artist ID is required");
    }

    const url = `https://www.theaudiodb.com/api/v1/json/2/artist.php?i=${encodeURIComponent(id)}`;

    const response = await fetch(url);

    if (!response.ok || !response) {
        throw new Error(`Error searching artist: ${id} - status: ${response.status}`);
    }

    const text = await response.text();

    if (!text) {
        return null;
    }

    try {
        const data = JSON.parse(text);
        return data.artists ? data.artists[0] : null;
    } catch (error) {
        console.error("Error parsing JSON:", error);
        throw new Error("Failed to parse JSON response");
    }
};
