import React, { useContext } from 'react';
import { Context } from "../hooks/Store";
import FavoriteButton from "./FavoriteButton";

function Image({image}){
    const [state, dispatch] = useContext(Context);

    function toggleImageModal(){
        let show = !state.showImageModal;

        dispatch({type: 'TOGGLE_IMAGE_MODAL', payload: show});
        if(show)
            dispatch({type: 'UPDATE_SELECTED_IMAGE', payload: image});
    }

    return (
        <div className="col-sm-12 col-md-4 mb-4">
            <div className="card card-image">
                <img className="card-img-top" src={ image.url } alt={ image.title } onClick={toggleImageModal} />
                <div className="card-footer">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 text-truncate">
                            <small className="text-muted"><strong>Title: { image.title }</strong></small>
                        </div>
                        <div className="col-sm-12 col-md-4 text-right">
                            <FavoriteButton image={image}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image;