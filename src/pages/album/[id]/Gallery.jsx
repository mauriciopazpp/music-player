import Image from "next/image";

export default function Gallery({ album }) {
  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-4 pt-5">
      {album.strAlbum3DThumb && (
        <div className="relative w-[100px] h-[100px]">
          <Image
            layout="fill"
            src={album.strAlbum3DThumb}
            alt={album.strAlbum}
            objectFit="cover"
            className="album-image group-hover:opacity-100 transition-opacity duration-1000"
          />
        </div>
      )}
      {album.strAlbumBack && (
        <div className="relative w-[100px] h-[100px]">
          <Image
            layout="fill"
            src={album.strAlbumBack}
            alt={album.strAlbum}
            objectFit="cover"
            className="album-image group-hover:opacity-100 transition-opacity duration-1000"
          />
        </div>
      )}
      {album.strAlbumCDart && (
        <div className="relative w-[100px] h-[100px]">
          <Image
            layout="fill"
            src={album.strAlbumCDart}
            alt={album.strAlbum}
            objectFit="cover"
            className="album-image group-hover:opacity-100 transition-opacity duration-1000"
          />
        </div>
      )}
      {album.strAlbumThumb && (
        <div className="relative w-[100px] h-[100px]">
          <Image
            layout="fill"
            src={album.strAlbumThumb}
            alt={album.strAlbum}
            objectFit="cover"
            className="album-image group-hover:opacity-100 transition-opacity duration-1000"
          />
        </div>
      )}
    </div>
  );
}
