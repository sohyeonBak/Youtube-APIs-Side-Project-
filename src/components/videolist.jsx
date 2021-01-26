import React from 'react';


const videolist = ({video, video : {snippet},onClickVideo, display}) => {
    const displayType = display === 'list' ? 'keywordplay' : 'keywordlist'
    return(
    <li className={`${"keyworddefault"} ${displayType}`} onClick={(e)=>{onClickVideo(video); console.log(e)}}>
        <span className="listimg"><img src={snippet.thumbnails.medium.url}></img></span>
        <span className="listtitle">{snippet.title}</span>
        <span className="listdesc">{snippet.channelTitle}</span>
    </li>  
    )
}
       


export default videolist;