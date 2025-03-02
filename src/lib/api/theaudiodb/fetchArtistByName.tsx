import { ArtistType } from "@/types/ArtistType";
import { fetchData } from "./fetchData";

export const fetchArtistByName = async (artist: string): Promise<ArtistType | null> => {
  if (!artist) {
    throw new Error("Artist name is required");
  }

  const data = await fetchData<{ artists: ArtistType[] }>(`search.php?s=${encodeURIComponent(artist)}`);
  return data?.artists?.[0] ?? null;
};
