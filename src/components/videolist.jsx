import React, { memo } from 'react';


const videolist = memo(({video, video : {snippet},onClickVideo, display}) => {
    const displayType = display === 'list' ? 'keywordplay' : 'keywordlist'
    return(
    <li className={`${"keyworddefault"} ${displayType}`} onClick={()=>{onClickVideo(video);}}>
        <span className="listimg"><img src={snippet.thumbnails.medium.url}></img></span>
        <span className="listtitle">{snippet.title}</span>
        <span className="listdesc">{snippet.channelTitle}</span>
    </li>  
    )
}
       
)

export default videolist;