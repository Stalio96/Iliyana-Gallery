import { useAuthContext } from '../../../contexts/AuthContext';

const CommentForm = () => {
    const { user } = useAuthContext();
    
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
                console.log(commentData)
        });
    }

    return (
        <div className="comment">
            <form onClick={commentHandler} method="POST">
                <textarea type="text" name="comment" />
                <button type="submit">Add comment</button>
            </form>
        </div>
    );
}

export default CommentForm;