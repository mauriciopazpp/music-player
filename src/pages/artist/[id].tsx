import { GetServerSideProps } from 'next';
import { ArtistPageProps } from '@/types/ArtistPageProps';
import RootLayout from '@/app/layout';

export default function ArtistPage({ id }: ArtistPageProps) {
    return (
        <RootLayout>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Artist Details</h1>
                <p>Artist ID: {id}</p>
            </div>
        </RootLayout>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;
    return {
        props: {
            id,
        },
    };
};
