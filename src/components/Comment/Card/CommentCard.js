import * as commentService from '../../../services/commentService';
import { useNavigate } from "react-router-dom";

const CommentCard = ({
    comment,
    userId
}) => {
    const navigate = useNavigate();

    const deleteHandler = () => {
        commentService.deleteComment(comment._id)
        .then(() => {
            // navigate('/gallery');
        })
    } 

    const author = (
        <>
            <button>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
        </>
    )

    return (
        <div>
            <h3>User: {comment?.ownerId}</h3>
            <p>Comment: {comment?.comment}</p>

            {userId == comment.ownerId
                ? author
                : null
            }
        </div>
    );
}

export default CommentCard;