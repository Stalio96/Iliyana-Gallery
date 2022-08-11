import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

import * as photoService from '../../services/photoService';

import PhotoCard from '../Gallery/PhotoCard/PhotoCard';

import './Favorite.css';

const Favorite = () => {
    const [favorite, setFavorite] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        photoService.getMyPhoto(user._id)
            .then(photos => {
                setFavorite(photos);
            })
    }, []);

    return (
        <div className="favorite">
            <h1 className="favorite__title">Favorite</h1>
            <ul className="cardList">
                {favorite.map(x => <PhotoCard photo={x} key={x._id} />)}
            </ul>
        </div>
    );
}

export default Favorite;