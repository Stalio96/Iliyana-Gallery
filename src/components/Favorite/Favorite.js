import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

import * as photoService from '../../services/photoService';

import PhotoCard from '../Gallery/PhotoCard/PhotoCard';

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
        <>
            {favorite.map(x => <PhotoCard photo={x} />)}
        </>
    );
}

export default Favorite;