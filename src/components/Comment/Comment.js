import CommentCard from "./Card/CommentCard";
import CommentForm from "./Card/CommentForm";

import { useEffect, useState, useReducer, useCallback } from 'react';

import * as commentService from '../../services/commentService';

const Comment = ({
    userId,
    user,
    photoId
}) => {
    const [comments, setComments] = useState([]);


    const create = useCallback((comment, ownerId, e) => {
        commentService.createComment({
            comment,
            ownerId,
            photoId
        }).then(() => {
            e.target.reset();
        });
    }, [commentService.createComment])

    useEffect(() => {
        commentService.getComments(photoId)
            .then(comment => {
                setComments(comment)
            })
    }, [create])


    return (
        <div>
            {comments.map(x => <CommentCard comment={x} userId={userId} key={x._id} />)}

            {user
                ? <CommentForm create={create} />
                : null
            }
        </div>
    );
}

export default Comment;