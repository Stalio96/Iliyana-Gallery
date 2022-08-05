import { useParams, useNavigate } from "react-router-dom";

import { useAuthContext } from '../../../contexts/AuthContext';
import * as commentService from '../../../services/commentService';

const CommentForm = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { photoId } = useParams();

    const commentHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const comment = formData.get('comment');
        const ownerId = user._id;

        commentService.createComment({
            comment,
            ownerId,
            photoId
        }).then(() => {
            navigate(`/details/${photoId}`);
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