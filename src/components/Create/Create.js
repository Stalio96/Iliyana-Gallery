import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "../../contexts/AuthContext";

import * as photoService from '../../services/photoService';

import './Create.css';

const Create = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const onCreateHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get('name');
        const date = formData.get('date');
        const img = formData.get('image');
        const description = formData.get('description');
        const album = formData.get('album');
        const ownerId = user._id;

        photoService.create({
            name,
            date,
            img,
            description,
            album,
            ownerId
        })
            .then(result => {
                navigate('/gallery');
            });
    }

    return (
        <form className="create" onSubmit={onCreateHandler} method="POST">
            <div className="create__field">
                <legend>Add photo</legend>
                <div className="name">
                    <label className="name__label" htmlFor="name">Name</label>
                    <span className="input">
                        <input name="name" type="text" placeholder="Type name..." />
                    </span>
                </div>
                <div className="date">
                    <label className="date__label" htmlFor="date">Date</label>
                    <span className="input">
                        <input name="date" type="text" placeholder="Type date..." />
                    </span>
                </div>
                <div className="image">
                    <label className="image__label" htmlFor="image">Image</label>
                    <span className="input">
                        <input name="image" type="text" placeholder="Type image..." />
                    </span>
                </div>
                <div className="description">
                    <label className="description__label" htmlFor="description">Description</label>
                    <span className="input">
                        <input name="description" type="text" placeholder="Type description..." />
                    </span>
                </div>
                <div className="album">
                    <label className="album__label" htmlFor="album">Album</label>
                    <span className="input">
                        <input name="album" type="text" placeholder="Type album..." />
                    </span>
                </div>

                <input className="submit__btn" type="submit" value="ADD" />
            </div>
        </form>
    );
}

export default Create;