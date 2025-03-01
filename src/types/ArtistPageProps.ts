import { ArtistDBaudio } from "./Artist";
export interface ArtistPageProps {
    id: string;
    artist: ArtistDBaudio | null;
}
