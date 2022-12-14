import { Link } from "react-router-dom";

import './PhotoCard.css';

const PhotoCard = ({
    photo
}) => {

    return (
        <li className="card">
            {/* <h3 className="card__name">{photo.name}</h3> */}
            
            {/* <p>Description: {photo.description}</p>
            <p>Owner: {photo.owner}</p>
            <p>Date: {photo.created_at}</p> */}

            <Link to={`/details/${photo._id}`}><img className="card__image" src={photo.img} /></Link>
        </li>
    )
}

export default PhotoCard;