import { ArtistType } from "@/types/ArtistType";

export const fetchArtistByName = async (artist: string): Promise<ArtistType | null> => {
  if (!artist) {
    throw new Error("Artist name is required");
  }

  const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(artist)}`;

  const response = await fetch(url);

  if (!response.ok || !response) {
    throw new Error(`Error searching artist: ${artist} - status: ${response.status}`);
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
