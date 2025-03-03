import React from 'react';
import { PlaylistItemPropsType } from "@/types/PlaylistItemPropsType";

const PlaylistItem: React.FC<PlaylistItemPropsType> = ({ playlist, trackCount }) => (
    <li className="playlist">
        <a href="#" className="playlist-link ">
            {playlist}
            <div className="playlist-track">{trackCount} tracks</div>
        </a>
    </li>
);

export default PlaylistItem;
