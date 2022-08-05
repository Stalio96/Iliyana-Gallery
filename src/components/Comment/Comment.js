import CommentCard from "./Card/CommentCard";
import CommentForm from "./Card/CommentForm";

const Comment = ({
    comments,
    userId
}) => {

    return (
        <div>
            {comments.map(x => <CommentCard comment={x} userId={userId} key={x._id} />)}
            
            <CommentForm />
        </div>
    );
}

export default Comment;