import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as photoService from '../../services/photoService';

const Edit = () => {
    const navigate = useNavigate();
    const { photoId } = useParams();
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        photoService.getById(photoId)
            .then(photoData => {
                setPhoto(photoData);
            });
    }, []);

    const onEditHandler = (e) => {
        e.preventDefault();

        const photoData = new FormData(e.currentTraget);

        const name = photoData.get('name');
        const date = photoData.get('date');
        const img = photoData.get('img');
        const description = photoData.get('description');
        const album = photoData.get('album');

            photoService.edit(photoId, {
                name,
                date,
                img,
                description,
                album
            })
                .then(() => {
                    navigate(`/details/${photoId}`);
                });
    };

    return (
        <form className="edit" onSubmit={onEditHandler} method="POST">
            <fieldset>
                <legend>Add photo</legend>
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input name="name" type="text" defaultValue={photo.name} placeholder="" />
                    </span>
                </div>
                <div className="date">
                    <label htmlFor="date">Date</label>
                    <span className="input">
                        <input name="date" type="text" defaultValue={photo.date} placeholder="" />
                    </span>
                </div>
                <div className="image">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input name="image" type="text" defaultValue={photo.image} placeholder="" />
                    </span>
                </div>
                <div className="description">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <input name="description" type="text" defaultValue={photo.description} placeholder="" />
                    </span>
                </div>
                <div className="album">
                    <label htmlFor="album">Album</label>
                    <span className="input">
                        <input name="album" type="text" defaultValue={photo.album} placeholder="" />
                    </span>
                </div>

                <input type="submit" value="EDIT" />
            </fieldset>
        </form>
    );
}

export default Edit;