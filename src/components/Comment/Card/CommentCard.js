const CommentCard = ({
    comment,
    userId
}) => {

    const author = (
        <>
            <button>Edit</button>
            <button>Delete</button>
        </>
    )

    return (
        <div>
            <h3>User: {comment?.ownerId}</h3>
            <p>Comment: {comment?.comment}</p>

            {userId == comment.ownerId
                ? author
                : null
            }
        </div>
    );
}

export default CommentCard;