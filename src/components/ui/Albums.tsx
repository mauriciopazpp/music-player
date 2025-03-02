import { AlbumsPropsType } from '@/types/AlbumsPropsType';
import Album from './Album';

export default function Albums({ albums }: AlbumsPropsType) {
    return (
        <div className="albums-grid">
            {
                albums && albums.length > 0 ? (
                    albums.map(album => (
                        <Album key={album.idAlbum} album={album} />
                    ))
                ) : (
                    <div className="no-albums">
                        <p>No albums found</p>
                    </div>
                )
            }
        </div>
    );
}
