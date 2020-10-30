import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../hooks/Store';
import Image from './Image';
import Loader from './Loader';

const Gallery = props => {
    const [state] = useContext(Context);

    return (
      <div>
          <div className="container">
            <div className="row">
                {
                    state.loading ? <Loader/> :
                    state.images.map(image => {
                        let url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`;

                        return <Image url={url} key={image.id} title={image.title} id={image.id} />
                    })
                }
            </div>
          </div>
      </div>
    );
  };
  
  export default Gallery;
