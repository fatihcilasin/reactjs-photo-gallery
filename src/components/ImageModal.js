import React, { useContext, useState } from 'react';
import {Context} from "../hooks/Store";
import Loader from "./Loader";

function ImageModal(){
    const [state, dispatch] = useContext(Context);
    const [loaded, setLoaded] = useState(false);

    function closeModal() {
        dispatch({type: 'TOGGLE_IMAGE_MODAL', payload: false});
        setLoaded(false);
    }

    return (
        <div className={state.showImageModal ? "modal fade show" : "modal"} tabIndex="-1" role="dialog" style={ state.showImageModal ? {display: 'block'} : {}}>
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{ state.selectedImage.title }</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img style={loaded ? {display: 'block'} : {display: 'none'}} width="100%" className="img-fluid" src={ state.selectedImage.urlLarge } alt={ state.selectedImage.title } onLoad={() => setLoaded(true)} />
                        <div style={loaded ? {display: 'none'} : {display: 'block'}} className="modal-image-loader">
                            <Loader/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageModal;