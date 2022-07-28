import { Link } from "react-router-dom";

const PhotoCard = ({
    photo
}) => {
    console.log(photo.name)
    return (
        <li>
            <h3>Name: {photo.name}</h3>
            <img src={photo.img} />
            <p>Description: {photo.description}</p>
            <p>Owner: {photo.owner}</p>
            <p>Date: {photo.created_at}</p>

            <Link to={`/details/${photo._id}`}>Details</Link>
        </li>
    )
}

export default PhotoCard;