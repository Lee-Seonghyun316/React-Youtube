import React, {useEffect, useRef, useState} from 'react';
import styles from './searchHeader.modules.css'

const SearchHeader = (props) => {

    const [search, setSearch] = useState('');
    const useSearch = useRef();
    let query = useSearch.current
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyAoP_rA-CaHFtnkAE0fKxKMJE80XceznX0`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result.items))
            .catch(error => console.log('error', error));
    }, []);

    return (
        <header className={styles.header}>
            <h1>YouTube</h1>
            <form className={styles.searchForm}>
                <input ref={useSearch} type="text" className={styles.searchText} placeholder="search"/>
                <button className={styles.searchButton}>Go</button>
            </form>
        </header>
    )
};

export default SearchHeader;