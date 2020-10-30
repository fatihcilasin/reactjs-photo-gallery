import React, {useContext, useState} from 'react';
import {Context} from "../hooks/Store";

function FavoriteButton({id, isFavorited = false}){
    const [state, dispatch] = useContext(Context);
    const [favorited, setFavorited] = useState(false);

    let selected = state.favorites.indexOf(id) >= 0;
    function toggleFavorite(){
        if(!selected)
            dispatch({type: 'ADD_FAVORITE', payload: id});
        else
            dispatch({type: 'REMOVE_FAVORITE', payload: id});
    }

    return (
        <button type="button" className="btn btn-dark btn-sm" onClick={toggleFavorite}>
            { selected ?  <i className="fas fa-star"></i> :  <i className="far fa-star"></i> }
        </button>
    )
}

export default FavoriteButton;