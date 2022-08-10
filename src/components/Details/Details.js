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
        <div className="owner">
            <Link className="link" to={`/edit/${photoId}`}>EDIT</Link>
            <Link className="link" to={`/delete/${photoId}`} onClick={deleteHandler}>DELETE</Link>
        </div>
    );

    const guest = (
        <div className="guest">
            <button className="btn" onClick={likeHandler}>Add to favorite</button>
            <button className="btn" onClick={disLikeHandler}>Remove from favorite</button>
        </div>
    );

    return (
        <div className="detail__page">
            <div className="details">
                <div className="image__container">
                    <img className="photo" src={photo?.img} />
                </div>
                <div className="info">
                    <h1 className="photo__name">Name: {photo?.name}</h1>
                    <p className="photo__author">Author: {photo?.owner.email}</p>
                    <p className="photo__desc">Description: {photo?.description}</p>
                </div>
                {user.email == ''
                    ? null
                    : user._id == photo?.owner._id
                        ? owner
                        : guest
                }
            </div>

            <Comment photoId={photoId} userId={user._id} user={user.email} />
            {/* <div className="comment">
                <form onClick={commentHandler} method="POST">
                    <textarea type="text" name="comment" />
                    <button type="submit">Add comment</button>
                </form>
            </div> */}
        </div>
    );
}

export default Details;