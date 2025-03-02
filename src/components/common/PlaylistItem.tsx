import React from 'react';
import { PlaylistItemPropsType } from "@/types/PlaylistItemPropsType";

const PlaylistItem: React.FC<PlaylistItemPropsType> = ({ playlist, trackCount }) => (
    <li className="py-2">
        <a href="#" className="text-sm hover:text-gray-300 transition-colors duration-200">
            {playlist}
            <div className="text-neutral-500 text-xs">{trackCount} tracks</div>
        </a>
    </li>
);

export default PlaylistItem;
