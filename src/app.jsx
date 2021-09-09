import './app.css';
import VideoList from "./components/video_list/video_list";
import {useEffect, useState} from "react";

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAoP_rA-CaHFtnkAE0fKxKMJE80XceznX0\n", requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }, []);

    return <VideoList videos={videos}/>;
}

export default App;
