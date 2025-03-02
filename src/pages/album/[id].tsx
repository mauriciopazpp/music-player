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
        <div className="grid md:grid-cols-2 md:gap-4 md:p-10 md:pt-10">
            <div className="p-10 md:p-10">
                <Image
                    layout="responsive"
                    src={album.strAlbumThumb}
                    alt={album.strAlbum}
                    width={150}
                    height={250}
                    className="album-image object-cover transition-opacity duration-1000"
                />
                <h1 className="text-2xl font-bold text-neutral-300 pt-5">{album.strAlbum}</h1>
                <div>{album.intYearReleased}</div>
                <div className="text-sm text-neutral-600">{album.strLabel}</div>
            </div>
            <div className="px-10 pt-10 md:pt-10">
                <h1 className="text-5xl font-bold pb-5 text-neutral-300">{album.strArtistStripped}</h1>
                <h4 className="pb-5">{album.strGenre}</h4>
                <p className="text-small font-thin text-justify">{album.strDescriptionEN}</p>
                <Gallery album={album} />
            </div>
            <div className="flex justify-center align-middle items-center gap-5">
                <button className="btn btn-outline rounded-full w-12 h-12">
                    <FaDownload />
                </button>
                <button className="btn btn-outline rounded-full w-15 h-15">
                    <FaPlay />
                </button>
                <button className="btn btn-outline rounded-full w-12 h-12">
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
