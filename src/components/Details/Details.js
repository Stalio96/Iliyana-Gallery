import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
    const [isFav, setIsFav] = useState('');

    useEffect(() => {
        photoService.getById(photoId)
            .then(photoData => {
                setPhoto(photoData);
            });

        photoService.getMyPhoto(user._id)
            .then(data => {
                data.forEach(element => {
                    if (element._id == photoId) {
                        setIsFav(true);
                    } else {
                        setIsFav(false);
                    }
                });
            })
    }, [isFav]);

    const deleteHandler = (e) => {
        e.preventDefault();

        photoService.destroy(photoId)
            .then(() => {
                navigate('/gallery');
            })
    }

    const likeHandler = (e) => {
        e.preventDefault();

        setIsFav(true);

        photoService.like(photoId, user._id)
    }

    const disLikeHandler = (e) => {
        e.preventDefault();

        setIsFav(false);

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
            {isFav
                ? <button className="btn remove" onClick={disLikeHandler}>Remove from favorite</button>
                : <button className="btn add" onClick={likeHandler}>Add to favorite</button>
            }
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