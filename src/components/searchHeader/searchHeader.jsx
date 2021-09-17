import React, {useEffect, useRef, useState} from 'react';
import styles from './searchHeader.modules.css'

const SearchHeader = ({onSearch}) => {

    const useSearch = useRef();
    const handleSearch = () => {
        let query = useSearch.current.value;
        onSearch(query);
    };
    const onClick = () => {
        handleSearch();
    };

    return (
        <header className={styles.header}>
            <h1>YouTube</h1>
            <form className={styles.searchForm}>
                <input ref={useSearch} type="text" className={styles.searchText} placeholder="search"/>
                <button className={styles.searchButton} onClick={onClick}>Go</button>
            </form>
        </header>
    )
};

export default SearchHeader;