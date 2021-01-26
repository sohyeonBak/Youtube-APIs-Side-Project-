import React, { useEffect, useState, useCallback } from 'react';
import './app.css';
import Contents from "./components/contents";
import Topbar from "./components/topbar";
import Videoplay from "./components/videoplay";

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const selectVideo = (video) =>{
    setSelectedVideo(video)
  }

  const search = useCallback(
    query=> {
      setSelectedVideo(null);
      youtube.search(query).then(videos=>setVideos(videos));
    }, [youtube]);

  useEffect(()=>{
    youtube.mostPopular().then(videos=>setVideos(videos))
  }, [youtube]);

  return (
    <div className="content">
        <Topbar onSearch={search}/>
        <section className="playzone">
        {selectedVideo && (
          <div className="play">
            <Videoplay video={selectedVideo} />
          </div>
        )}
          <div className="list">
            <Contents videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
          </div>
          
        </section>
      </div>
  );
}

export default App;