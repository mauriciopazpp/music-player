import { ArtistListPropsType } from "./ArtistListPropsType";

export interface FloatingSearchContentPropsType extends ArtistListPropsType {
    onSelectArtist: () => void;
}
