import React, {useContext, useState} from 'react';

function FavoriteButton({id, isFavorited = false}){
    const [favorited, setFavorited] = useState(false);
    function toggleFavorite(){
        setFavorited(!favorited);
    }

    return (
        <button type="button" className="btn btn-dark btn-sm" onClick={toggleFavorite}>
            { favorited ?  <i className="fas fa-star"></i> :  <i className="far fa-star"></i> }
        </button>
    )
}

export default FavoriteButton;