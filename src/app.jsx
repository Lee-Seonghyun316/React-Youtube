import './app.css';
import VideoList from "./components/video_list/video_list";
import {useEffect, useState} from "react";
import SearchHeader from "./components/searchHeader/searchHeader";

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAoP_rA-CaHFtnkAE0fKxKMJE80XceznX0", requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }, []);

    return (
        <>
            <SearchHeader/>
            <VideoList videos={videos}/>
        </>
    )
};

export default App;
