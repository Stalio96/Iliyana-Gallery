import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuthContext } from '../../contexts/AuthContext';

import * as photoService from '../../services/photoService';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { photoId } = useParams();
    const [photo, setPhoto] = useState();

    useEffect(() => {
        photoService.getById(photoId)
            .then(photoData => {
                setPhoto(photoData);
            });
    }, []);

    const owner = (
        <>
            <Link to={`/edit/${photoId}`}>EDIT</Link>
            <button>DELETE</button>
        </>
    );

    const guest = (
        <>
            <button>LIKE</button>
            <button>DISLIKE</button>
        </>
    );

    return (
        <>
            <div>
                <h1>Name: {photo?.name}</h1>
                <img src={photo?.img} />
                <p>Description: {photo?.description}</p>
                <p>Owner: {photo?.owner}</p>
            </div>

            {
                user._id == photo?.owner
                    ? owner
                    : guest
            }
        </>
    );
}

export default Details;