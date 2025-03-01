import { ArtistDBaudio } from "./Artist";

export interface SearchResponse {
    artists: ArtistDBaudio[] | null;
}
