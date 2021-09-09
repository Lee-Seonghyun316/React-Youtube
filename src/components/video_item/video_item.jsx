import React from 'react';
import  styles from './video_item.module.css'
const VideoItem = (props) => (
    <li className={styles.video_item}>
        <img  className={styles.video_thumnail} src={props.video.snippet.thumbnails.medium.url} alt="video thumnail"/>
        <h2 className={styles.video_title}>{props.video.snippet.title}</h2>
        <p className={styles.video_author}>{props.video.snippet.channelTitle}</p>
    </li>
);

export default VideoItem;