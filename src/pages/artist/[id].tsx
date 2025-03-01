import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { fetchArtistById } from '@/lib/api/theaudiodb/fetchArtistById';
import { fetchArtistAlbums } from '@/lib/api/theaudiodb/fetchArtistAlbums';
import { ArtistDBaudio } from '@/types/Artist';
import { Album } from '@/types/Album';
import Cover from './[id]/Cover';
import ButtonActions from './[id]/ButtonActions';
import Albums from '../../components/ui/Albums';

interface ArtistPageProps {
    artist: ArtistDBaudio;
    albums: Album[] | null;
}

export default function ArtistPage({ artist, albums }: ArtistPageProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!artist) {
        return <div>Artist not found</div>;
    }

    const albumsToDisplay = albums || [];

    return (
        <div>
            <Cover artist={artist} />
            <ButtonActions artist={artist} />
            <Albums albums={albumsToDisplay} />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params as { id: string };
    const artist = await fetchArtistById(id);
    const albums = await fetchArtistAlbums(id);

    return {
        props: {
            artist,
            albums
        },
    };
};
