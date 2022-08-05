const CommentCard = ({
    comments
}) => {
    console.log(comments)

    return (
        <div>
            <h3>User: {comments?.ownerId}</h3>
            <p>Comment: {comments?.comment}</p>
        </div>
    );
}

export default CommentCard;