import { useParams, useNavigate } from "react-router-dom";

import { useAuthContext } from '../../../contexts/AuthContext';
import * as commentService from '../../../services/commentService';

const CommentForm = () => {
    const { user } = useAuthContext();
    const { photoId } = useParams();
    console.log(photoId);

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

        });


    }

    return (
        <div className="comment">
            <form onSubmit={commentHandler} method="POST">
                <textarea type="text" name="comment" />
                <button type="submit">Add comment</button>
            </form>
        </div>
    );
}

export default CommentForm;