import React from 'react';
import Header from "../components/Header";
import FavoriteList from "../components/FavoriteList";

function Favorites(){
    return (
        <div className="favorites">
            <Header/>
            <FavoriteList/>
        </div>
    )
}

export default Favorites;