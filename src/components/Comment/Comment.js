import CommentCard from "./Card/CommentCard";
import CommentForm from "./Card/CommentForm";

const Comment = ({
    comments
}) => {

    return (
        <div>
            {comments.map(x => <CommentCard comments={x} key={x._id} />)}
            
            <CommentForm />
        </div>
    );
}

export default Comment;