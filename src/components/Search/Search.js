import * as photoService from '../../services/photoService';
import { useState } from 'react';
import PhotoCard from '../Gallery/PhotoCard/PhotoCard';

import './Search.css';

const Search = () => {
    const [search, setSearch] = useState([]);

    const onSearch = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const search = formData.get('search');

        photoService.search(search)
            .then(photoData => {
                setSearch(photoData)
            });
    }

    return (
        <div className="search">
            <form className="search__from" onClick={onSearch}>
                <div className="search">
                    <label className="search__label" htmlFor="search">Search</label>
                    <span className="input">
                        <input className="input__search" name="search" type="text" placeholder="Enter a photo name..." />
                    </span>
                    <button className="submit__btn" type="submit">SEARCH</button>
                </div>
            </form>

            <div className="result">
                <p>Result</p>

                {search.length > 0
                    ? <ul>
                        {search.map(x => <PhotoCard key={x._id} photo={x} />)}
                    </ul>
                    : <p>No photos found!</p>
                }
            </div>
        </div>
    );
}

export default Search;