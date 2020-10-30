import React, { Component } from 'react';
import FavoriteButton from "./FavoriteButton";

function Image({url, title, id}){
    return (
        <div className="col-sm-12 col-md-4 mb-4">
            <div className="card card-image">
                <img className="card-img-top" src={ url } alt={ title } />
                <div className="card-footer">
                   <div className="row">
                       <div className="col-sm-12 col-md-8 text-truncate">
                           <small className="text-muted"><strong>Title: {title}</strong></small>
                       </div>
                       <div className="col-sm-12 col-md-4 text-right">
                          <FavoriteButton id={id}/>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Image;