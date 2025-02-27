const AUDIO_DB_API_KEY = process.env.AUDIO_DB_API_KEY;
if (!AUDIO_DB_API_KEY) {
  throw new Error("Please define the API_KEY.");
}

export type QueryKey =
  | "artistId"
  | "albumId"
  | "mbReleaseGroupId"
  | "mbArtistId";

export const fetchAudioDB = async (queryKey: QueryKey, value: string) => {
  let endpoint = "";
  let param = "i";

  if (queryKey === "mbReleaseGroupId" || queryKey === "albumId") {
    endpoint = "album.php";
    param = queryKey === "albumId" ? "m" : "i";
  } else if (queryKey === "artistId" || queryKey === "mbArtistId") {
    endpoint = "artist.php";
  }

  const url = `https://www.theaudiodb.com/api/v1/json/${AUDIO_DB_API_KEY}/${endpoint}?${param}=${value}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error searching ${queryKey}`);
  }
  return response.json();
};
