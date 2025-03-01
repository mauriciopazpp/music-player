import { ArtistDBaudio } from "@/types/Artist";

export const fetchArtistByName = async (artist: string): Promise<ArtistDBaudio | null> => {
  if (!artist) {
    throw new Error("Artist name is required");
  }

  const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(artist)}`;
  console.log("Fetching artist data from URL:", url);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error("Failed to fetch, status:", response.status);
      throw new Error(`Error searching artist: ${artist}`);
    }

    const data = await response.json();
    console.log("Received data:", data);

    return data.artists ? data.artists[0] : null;
  } catch (error) {
    console.error("Error fetching artist:", error);
    throw new Error(`Failed to fetch artist data for ${artist}`);
  }
};
