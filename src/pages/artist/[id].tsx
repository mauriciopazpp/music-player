import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { fetchArtistById } from '@/lib/api/theaudiodb/fetchArtistById';
import { fetchArtistAlbums } from '@/lib/api/theaudiodb/fetchArtistAlbums';
import { ArtistType } from '@/types/ArtistType';
import { AlbumType } from '@/types/AlbumType';
import Cover from './[id]/Cover';
import ButtonActions from './[id]/ButtonActions';
import Albums from '../../components/ui/Albums';
import Head from 'next/head';

interface ArtistPageProps {
    artist: ArtistType;
    albums: AlbumType[] | null;
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
        <>
            <Head>
                <title>{artist.strArtist}</title>
                <meta name="description" content={`Detail page of the artist ${artist.strArtist}`} />
            </Head>
            <div>
                <Cover artist={artist} />
                <ButtonActions artist={artist} />
                <div className='main-background'>
                    <h2 className='h2'>Albums</h2>
                    <Albums albums={albumsToDisplay} />
                </div>
            </div>
        </>
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
