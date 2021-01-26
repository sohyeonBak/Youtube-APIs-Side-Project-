import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Youtube from './service/youtube';

const youtube = new Youtube(process.env.React_APP_YOUTUBE_API_KEY)
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);

