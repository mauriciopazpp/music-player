import Image from "next/image";

export default function Gallery({ album }) {
  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery">
      {album.strAlbum3DThumb && (
        <div className="gallery-container">
          <Image
            layout="fill"
            src={album.strAlbum3DThumb}
            alt={`3D album image of ${album.strAlbum}`}
            objectFit="cover"
            className="gallery-image album-image"
          />
        </div>
      )}
      {album.strAlbumBack && (
        <div className="relative w-[100px] h-[100px]">
          <Image
            layout="fill"
            src={album.strAlbumBack}
            alt={`Album back image of ${album.strAlbum}`}
            objectFit="cover"
            className="gallery-hover-image album-image"
          />
        </div>
      )}
      {album.strAlbumCDart && (
        <div className="relative w-[100px] h-[100px]">
          <Image
            layout="fill"
            src={album.strAlbumCDart}
            alt={`CD art album of ${album.strAlbum}`}
            objectFit="cover"
            className="gallery-image album-image"
          />
        </div>
      )}
      {album.strAlbumThumb && (
        <div className="relative w-[100px] h-[100px]">
          <Image
            layout="fill"
            src={album.strAlbumThumb}
            alt={`Album image thumb of ${album.strAlbum}`}
            objectFit="cover"
            className="gallery-hover-image album-image"
          />
        </div>
      )}
    </div>
  );
}
