import React from 'react';

const Videoplay = ({video}) => (
   <section className="videozone">
        <iframe id="ytplayer" title="Youtube video player" type="text/html" width="100%" height="405"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0" allowFullScreen>
        </iframe>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelId}</h3>
        <p>{video.snippet.description}</p>
    </section>
);

export default Videoplay;