import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuthContext } from '../../contexts/AuthContext';

import * as photoService from '../../services/photoService';
import * as commentService from '../../services/commentService';

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

    const commentHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const comment = formData.get('comment');
        const ownerId = user._id;

        commentService.createComment({
            comment,
            ownerId,
            photoId
        }).then(commentData => {
                console.log(commentData)
        });
    }

    const deleteHandler = (e) => {
        e.preventDefault();

        photoService.destroy(photoId)
            .then(() => {
                navigate('/gallery');
            })
    }

    const owner = (
        <>
            <Link to={`/edit/${photoId}`}>EDIT</Link>
            <Link to={`/delete/${photoId}`} onClick={deleteHandler}>DELETE</Link>
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


            <div className="comment">
                <form onClick={commentHandler} method="POST">
                    <textarea type="text" name="comment" />
                    <button type="submit">Add comment</button>
                </form>
            </div>
        </>
    );
}

export default Details;