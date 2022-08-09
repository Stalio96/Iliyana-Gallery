import { useEffect, useState } from "react";

import * as photoService from '../../services/photoService';

import PhotoCard from "./PhotoCard/PhotoCard";

const Gallery = () => {
    let [photos, setPhotos] = useState([]);

    useEffect(() => {
        photoService.getAll()
            .then(result => {
                setPhotos(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section>
            <h1>Gallery</h1>

            {photos.length > 0
                ? <ul>
                    {photos.map(x => <PhotoCard key={x._id} photo={x} />)}
                </ul>
                : <p>No photos in database!</p>
            }
        </section>
    );
}

export default Gallery;