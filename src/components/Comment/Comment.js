import CommentCard from "./Card/CommentCard";
import CommentForm from "./Card/CommentForm";

const Comment = ({
    comments,
    userId,
    user
}) => {

    return (
        <div>
            {comments.map(x => <CommentCard comment={x} userId={userId} key={x._id} />)}

            {user
                ? <CommentForm />
                : null
            }
        </div>
    );
}

export default Comment;