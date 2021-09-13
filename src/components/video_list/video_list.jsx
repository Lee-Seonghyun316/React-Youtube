import React from 'react';
import VideoItem from "../video_item/video_item";
import styles from './video_list.module.css'

const VideoList = (props) => (
    <ul className={styles.video_list}>
        {props.videos.map(video => (
            //videoId 가 없는 객체는 어떻게 해야 할까?
            <VideoItem key={video.id} video={video}/>
        ))}
    </ul>
);

export default VideoList;