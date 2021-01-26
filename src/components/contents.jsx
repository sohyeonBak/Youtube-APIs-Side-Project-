import React from 'react';
import Videolist from "./videolist";

const Contents = ({videos, onVideoClick, display}) => (
    <ul>
        {videos.map(video => (
            <Videolist key={video.id.videoId} video={video} onClickVideo={onVideoClick} display={display} />
        ))}
    </ul>
);

export default Contents;