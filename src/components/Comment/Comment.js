import CommentCard from "./Card/CommentCard";
import CommentForm from "./Card/CommentForm";

const Comment = ({
    comments,
    photoId
}) => {

    return (
        <div>
            {comments.map(x => <CommentCard comments={x} key={x._id} />)}
            
            <CommentForm photoId={photoId} />
        </div>
    );
}

export default Comment;