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
        <div key={album.idAlbum} className="album-card">
            <Link href={`/album/${album.idAlbum}`} className='album-animation group'>
                <div className="album-image-container">
                    <div className="album-images">
                        {!isImageLoaded && <ImageSkeleton />}
                        {albumThumb ? (
                            <Image
                                layout="fill"
                                src={albumThumb}
                                alt={album.strAlbum}
                                objectFit="cover"
                                className={`album-image-thumb ${isImageLoaded ? 'opacity-100' : 'opacity-0'
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
                                className="album-image-cdart"
                            />
                        )}
                        <div className="album-gradient" />
                    </div>
                </div>
                <div className="pt-3">
                    <div className="album-title">{album.strAlbum}</div>
                </div>
            </Link>
        </div>
    );
}