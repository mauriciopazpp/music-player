import Image from 'next/image';
import { useState } from 'react';
import { AlbumType } from '@/types/AlbumType';
import ImageSkeleton from '../common/imageSkeleton';
import Link from 'next/link';

export default function Album({ album }: { album: AlbumType }) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [hasImageError, setHasImageError] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    const handleImageError = () => {
        setHasImageError(true);
    };

    const albumThumb =
        album.strAlbumThumb && album.strAlbumThumb.trim() !== ''
            ? album.strAlbumThumb
            : null;
    const albumCDart =
        album.strAlbumCDart && album.strAlbumCDart.trim() !== ''
            ? album.strAlbumCDart
            : null;

    return (
        <div key={album.idAlbum} className="album-item relative overflow-hidden group cursor-pointer flex justify-center">
            <Link href={`/album/${album.idAlbum}`} className='album-animation'>
                <div className="album-image-container relative flex justify-center">
                    <div className="relative w-[190px] h-[190px]">
                        {!isImageLoaded && <ImageSkeleton />}
                        {albumThumb ? (
                            <Image
                                layout="fill"
                                src={albumThumb}
                                alt={album.strAlbum}
                                objectFit="cover"
                                className={`album-image absolute transition-opacity duration-1000 ${isImageLoaded ? 'opacity-100' : 'opacity-0'
                                    }`}
                                onLoad={handleImageLoad}
                                onError={handleImageError}
                            />
                        ) : (
                            <ImageSkeleton />
                        )}
                        {albumCDart && !hasImageError && (
                            <Image
                                layout="fill"
                                src={albumCDart}
                                alt={album.strAlbum}
                                objectFit="cover"
                                className="album-image absolute opacity-0 group-hover:opacity-100 transition-opacity duration-1000 p-5 mr-5 z-20"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    </div>
                </div>
                <div className="pt-3">
                    <h2 className="text-xs font-bold text-white text-center px-5">{album.strAlbum}</h2>
                </div>
            </Link>
        </div>
    );
}