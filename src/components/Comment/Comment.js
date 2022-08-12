import CommentCard from "./Card/CommentCard";
import CommentForm from "./Card/CommentForm";

import { useEffect, useState, useCallback } from 'react';

import * as commentService from '../../services/commentService';

import './Comment.css';

const Comment = ({
    userId,
    user,
    photoId
}) => {
    const [comments, setComments] = useState([]);
    let counter = 0;
    let counter2 = 0;

    console.log(counter)
    const render = () => {
        counter2++;
        counter = counter2
    }

    const create = useCallback((comment, ownerId, e) => {
        commentService.createComment({
            comment,
            ownerId,
            photoId
        }).then(() => {
            render();
            console.log(counter)
            e.target.reset();
        });
    }, [commentService.createComment])

    useEffect(() => {
        commentService.getComments(photoId)
            .then(comment => {
                setComments(comment)
            })
    }, [counter]);

    return (
        <div className="comment__container">
            <div className="card__container">
                {comments.map(x => <CommentCard comment={x} userId={userId} key={x._id} />)}
            </div>

            {user
                ? <CommentForm create={create} />
                : null
            }
        </div>
    );
}

export default Comment;