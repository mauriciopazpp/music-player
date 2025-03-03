import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { fetchArtistAlbum } from "@/lib/api/theaudiodb/fetchArtistAlbum";
import { AlbumType } from "@/types/AlbumType";
import Image from "next/image";
import { FaPlay, FaDownload, FaShareAlt } from 'react-icons/fa';
import Gallery from "./[id]/Gallery";

export default function AlbumPage({ album }: { album: AlbumType }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!album) {
        return <div>Album not found</div>;
    }

    return (
        <div className="album">
            <div className="album-container">
                <Image
                    layout="responsive"
                    src={album.strAlbumThumb}
                    alt={album.strAlbum}
                    width={150}
                    height={250}
                    className="album-image"
                />
                <h2 className="h2 pt-5">{album.strAlbum}</h2>
                <div>{album.intYearReleased}</div>
                <div className="album-title">{album.strLabel}</div>
            </div>
            <div className="album-gallery">
                <h2 className="h2">{album.strArtistStripped}</h2>
                <h4 className="pb-5">{album.strGenre}</h4>
                <p className="text-small font-thin text-justify">{album.strDescriptionEN}</p>
                <Gallery album={album} />
            </div>
            <div className="album-actions">
                <button className="album-action">
                    <FaDownload />
                </button>
                <button className="album-action">
                    <FaPlay />
                </button>
                <button className="album-action">
                    <FaShareAlt />
                </button>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params as { id: string };
    const album = await fetchArtistAlbum(id);

    return {
        props: {
            album
        },
    };
};
