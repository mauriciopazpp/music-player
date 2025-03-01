import { Album } from "@/types/Album";

export const searchAlbums = async (artistName: string): Promise<Album[] | null> => {
    try {
        const response = await fetch(`https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(artistName)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data from The Audio DB');
        }
        const data = await response.json();
        return data?.album || null;
    } catch (error) {
        console.error('Error fetching albums:', error);
        return null;
    }
};
