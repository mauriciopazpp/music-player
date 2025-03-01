import Image from 'next/image';
import { useState } from 'react';
import { Album as AlbumType } from '@/types/Album';
import ImageSkeleton from '../common/imageSkeleton';

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
        <div key={album.idAlbum} className="album-item relative overflow-hidden group cursor-pointer">
            <div className="album-image-container relative">
                <div className="relative w-[200px] h-[200px]">
                    {!isImageLoaded && <ImageSkeleton />}
                    {albumThumb ? (
                        <Image
                            layout="responsive"
                            src={albumThumb}
                            alt={album.strAlbum}
                            width={200}
                            height={200}
                            className={`album-image absolute inset-0 object-cover transition-opacity duration-1000 ${isImageLoaded ? 'opacity-100' : 'opacity-0'
                                }`}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                        />
                    ) : (
                        <ImageSkeleton />
                    )}
                    {albumCDart && !hasImageError && (
                        <Image
                            layout="responsive"
                            src={albumCDart}
                            alt={album.strAlbum}
                            width={180}
                            height={180}
                            className="album-image absolute inset-0 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000 p-5 mr-5"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            </div>
            <div>
                <h2 className="text-g font-bold text-white pt-3">{album.strAlbum}</h2>
            </div>
        </div>
    );
}
