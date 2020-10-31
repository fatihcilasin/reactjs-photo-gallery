import React, {useContext, useState} from 'react';
import {Context} from "../hooks/Store";

function FavoriteButton({image}){
    const [state, dispatch] = useContext(Context);

    //let selected = state.favorites.indexOf(image.id) >= 0;
    let selected = state.favorites.map(function (item) {return item.id;}).indexOf(image.id) >= 0;
    function toggleFavorite(){
        if(!selected)
            dispatch({type: 'ADD_FAVORITE', payload: image});
        else
            dispatch({type: 'REMOVE_FAVORITE', payload: image});

        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }

    return (
        <button type="button" className="btn btn-dark btn-sm" onClick={toggleFavorite}>
            { selected ?  <i className="fas fa-star"></i> :  <i className="far fa-star"></i> }
        </button>
    )
}

export default FavoriteButton;