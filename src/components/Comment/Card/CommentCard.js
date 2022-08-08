import * as commentService from '../../../services/commentService';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const CommentCard = ({
    comment,
    userId
}) => {
    const navigate = useNavigate();
    let [editInput, setEditInput] = useState(false);

    const deleteHandler = () => {
        commentService.deleteComment(comment._id)
            .then(() => {
                // navigate('/gallery');
            })
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
            <button onClick={deleteHandler}>Delete</button>
        </>
    );

    // const editButton = (
    //     <form className='editComment' method='PUT' onSubmit={editHandler}>
    //         <input htmlFor="editText" type="text" />
    //         <button type='submit'>Confirm</button>
    //     </form>
    // );

    return (
        <div>
            <h3>User: {comment?.ownerId.email}</h3>
            <p>Comment: {comment?.comment}</p>

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