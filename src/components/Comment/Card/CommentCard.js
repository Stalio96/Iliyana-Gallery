import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import * as commentService from '../../../services/commentService';

import './CommentCard.css';

const CommentCard = ({
    comment,
    userId,
    reRender
}) => {
    const navigate = useNavigate();
    let [editInput, setEditInput] = useState(false);


    const deleteHandler = () => {
        commentService.deleteComment(comment._id)
            .then(() => {
                // navigate('/gallery');
            })

        reRender();
    }

    // const editHandler = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);

    //     console.log(e.currentTarget);

    //     const editText = formData.get('editText');

    // }

    const author = (
        <>
            {/* <button>Edit</button> */}
            <button className="delete__btn" onClick={deleteHandler}><i class="fa-solid fa-x"></i></button>
        </>
    );

    // const editButton = (
    //     <form className='editComment' method='PUT' onSubmit={editHandler}>
    //         <input htmlFor="editText" type="text" />
    //         <button type='submit'>Confirm</button>
    //     </form>
    // );

    return (
        <div className="commentCard__container">
            <div className="commentCard__comment">
                <h3>User: {comment?.ownerId.email}</h3>
                <p>{comment?.comment}</p>

            </div>
                {userId == comment.ownerId._id
                    ? author
                    : null
                }

            {/* {editInput
                ? editButton
                : null
            } */}
        </div>
    );
}

export default CommentCard;