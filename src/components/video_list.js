import React, { Component } from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videosList = props.videos.map((video) => {
    return (
      <VideoListItem
        key={video.etag}
        onVideoSelect={props.onVideoSelect}
        video={video} />)
  });
  return (
    <ul className="col-md-4 list-group">
      {videosList}
    </ul>
  );
}

export default VideoList;
