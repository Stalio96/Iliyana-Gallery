import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

import { useAuthContext } from '../../contexts/AuthContext';

import Comment from "../Comment";

import * as photoService from '../../services/photoService';
import * as commentService from '../../services/commentService';

import './Details.css';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { photoId } = useParams();
    const [photo, setPhoto] = useState();

    useEffect(() => {
        photoService.getById(photoId)
            .then(photoData => {
                // console.log(photoData)
                setPhoto(photoData);
            });

        photoService.getMyPhoto(user._id)
            .then(data => {
                // console.log(data)
            })
    }, [])

    const deleteHandler = (e) => {
        e.preventDefault();

        photoService.destroy(photoId)
            .then(() => {
                navigate('/gallery');
            })
    }

    const likeHandler = (e) => {
        e.preventDefault();

        photoService.like(photoId, user._id)
    }

    const disLikeHandler = (e) => {
        e.preventDefault();

        photoService.disLike(photoId, user._id)
    }

    const owner = (
        <>
            <Link to={`/edit/${photoId}`}>EDIT</Link>
            <Link to={`/delete/${photoId}`} onClick={deleteHandler}>DELETE</Link>
        </>
    );

    const guest = (
        <>
            <button onClick={likeHandler}>Add to favorite</button>
            <button onClick={disLikeHandler}>Remove from favorite</button>
        </>
    );

    return (
        <>
            <div className="details">
                <div className="image__container">
                    <img src={photo?.img} />
                </div>
                <h1>Name: {photo?.name}</h1>
                <p>Description: {photo?.description}</p>
                <p>Author: {photo?.owner.email}</p>
            </div>


            {user.email == ''
                ? null
                : user._id == photo?.owner._id
                    ? owner
                    : guest
            }

            <Comment photoId={photoId} userId={user._id} user={user.email} />
            {/* <div className="comment">
                <form onClick={commentHandler} method="POST">
                    <textarea type="text" name="comment" />
                    <button type="submit">Add comment</button>
                </form>
            </div> */}
        </>
    );
}

export default Details;