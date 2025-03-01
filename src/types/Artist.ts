export interface ArtistDBaudio {
    mbid: string;
    name: string;
    image: {
        [key: string]: {
            '#text': string;
            size: string;
        };
    };
}
