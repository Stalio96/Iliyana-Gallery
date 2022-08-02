import * as photoService from '../../services/photoService';
import { useState } from 'react';
import PhotoCard from '../Gallery/PhotoCard/PhotoCard';

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
        <>
            <form onClick={onSearch}>
                <div className="search">
                    <label htmlFor="search">Search</label>
                    <span className="input">
                        <input name="search" type="text" placeholder="Enter a photo name..." />
                    </span>
                    <button type="submit">SEARCH</button>
                </div>
            </form>

            <p>Result</p>

            {search.length > 0
                ? <ul>
                    {search.map(x => <PhotoCard key={x._id} photo={x} />)}
                </ul>
                : <p>No photos found!</p>
            }
        </>
    );
}

export default Search;