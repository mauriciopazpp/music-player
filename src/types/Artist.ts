export interface Artist {
    mbid: string;
    name: string;
    image: {
        [key: string]: {
            '#text': string;
            size: string;
        };
    };
}
