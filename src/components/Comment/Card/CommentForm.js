import { useParams, useNavigate } from "react-router-dom";

import { useAuthContext } from '../../../contexts/AuthContext';
import * as commentService from '../../../services/commentService';

import './CommentForm.css';

const CommentForm = ({
    create
}) => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { photoId } = useParams();

    const commentHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        let comment = formData.get('comment');
        const ownerId = user._id;

        // commentService.createComment({
        //     comment,
        //     ownerId,
        //     photoId
        // }).then(() => {
        //     e.target.reset();
        // });
        
        create(comment, ownerId, e)

    }

    return (
        <div className="commentForm">
            <form className="commentForm__form" onSubmit={commentHandler} method="POST">
                <input className="commentForm__text" type="text" name="comment" placeholder="Type..." />
                <button className="commentForm__btn" type="submit"><i class="fa-solid fa-arrow-right"></i></button>
            </form>
        </div>
    );
}

export default CommentForm;