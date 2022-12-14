import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as photoService from '../../services/photoService';

import './Edit.css';

const Edit = () => {
    const navigate = useNavigate();
    const { photoId } = useParams();
    const [photo, setPhoto] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        photoService.getById(photoId)
            .then(photoData => {
                setPhoto(photoData);
            });
    }, []);

    const onEditHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get('name');
        const date = formData.get('date');
        const img = formData.get('image');
        const description = formData.get('description');
        const album = formData.get('album');

        if (name.trim() == '' || date.trim() == '' || img.trim() == '' || description.trim() == '' || album.trim() == '') {
            setError('All field are required!');
            throw Error('All field are required!');
        } else if (name.length < 3 || name.length > 8) {
            setError('Name must be between 3 and 8 characters long');
            throw Error('Name must be between 3 and 8 characters long');
        } else if (description.length > 40) {
            setError('Description must be max 40 characters long');
            throw Error('Description must be max 40 characters long');
        }

        photoService.edit(photoId, {
            name,
            date,
            img,
            description,
            album
        }).then(() => {
            navigate(`/details/${photoId}`);
        }).catch(err => {
            setError(err)
        });
    };

    return (
        <form className="edit" onSubmit={onEditHandler} method="POST">
            <div className="create__field">
                <legend>Edit photo</legend>
                {
                    error.length != 0
                        ? <span className="error">{error}</span>
                        : null
                }
                <div className="name">
                    <label className="name__label" htmlFor="name">Name</label>
                    <span className="input">
                        <input name="name" type="text" defaultValue={photo.name} placeholder="" />
                    </span>
                </div>
                <div className="date">
                    <label className="date__label" htmlFor="date">Date</label>
                    <span className="input">
                        <input name="date" type="text" defaultValue={photo.date} placeholder="" />
                    </span>
                </div>
                <div className="image">
                    <label className="image__label" htmlFor="image">Image</label>
                    <span className="input">
                        <input name="image" type="text" defaultValue={photo.img} placeholder="" />
                    </span>
                </div>
                <div className="description">
                    <label className="description__label" htmlFor="description">Description</label>
                    <span className="input">
                        <input name="description" type="text" defaultValue={photo.description} placeholder="" />
                    </span>
                </div>
                <div className="album">
                    <label className="album__label" htmlFor="album">Album</label>
                    <span className="input">
                        <input name="album" type="text" defaultValue={photo.album} placeholder="" />
                    </span>
                </div>

                <input className="submit__btn" type="submit" value="EDIT" />
            </div>
        </form>
    );
}

export default Edit;