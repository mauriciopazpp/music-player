import React from 'react';
import { PlaylistItemProps } from "@/types/PlaylistItemProps";

const PlaylistItem: React.FC<PlaylistItemProps> = ({ playlist, trackCount }) => (
    <li className="py-2">
        <a href="#" className="text-sm hover:text-gray-300 transition-colors duration-200">
            {playlist}
            <div className="text-neutral-500 text-xs">{trackCount} tracks</div>
        </a>
    </li>
);

export default PlaylistItem;
