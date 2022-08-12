import * as commentService from '../../../services/commentService';

import './CommentCard.css';

const CommentCard = ({
    comment,
    userId
}) => {
    const deleteHandler = () => {
        commentService.deleteComment(comment._id)
            .then(() => {
                // navigate('/gallery');
            });
    }

    

    const author = (
        <>
            <button className="delete__btn" onClick={deleteHandler}><i className="fa-solid fa-x"></i></button>
        </>
    );

    let created = new Date(comment?.created_at);

    let date = created.getDate() + "-" + parseInt(created.getMonth() + 1) + "-" + created.getFullYear();

    return (
        <div className="commentCard__container">
            <div className="commentCard__comment">
                <h3>User: {comment?.ownerId.email}</h3>
                <p>{comment?.comment}</p>

            </div>
            <div className="date__delete">
                {userId == comment.ownerId._id
                    ? author
                    : null
                }
                <p>{date}</p>
            </div>
        </div>
    );
}

export default CommentCard;