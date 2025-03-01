import { ArtistListProps } from "./ArtistListProps";

export interface FloatingSearchContentProps extends ArtistListProps {
    onSelectArtist: () => void;
}
