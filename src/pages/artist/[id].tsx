import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { fetchArtistById } from '@/lib/api/theaudiodb/fetchArtistById';
import { ArtistPageProps } from '@/types/ArtistPageProps';

export default function ArtistPage({ artist }: ArtistPageProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!artist) {
        return <div>Artist not found</div>;
    }

    return (
        <div>
            <h1>{artist.strArtist}</h1>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params as { id: string };
    const artist = await fetchArtistById(id);
    return {
        props: {
            artist,
        },
    };
};
