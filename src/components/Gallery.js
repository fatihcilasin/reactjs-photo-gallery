import React, { useContext } from 'react';
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
                        let urlLarge = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_c.jpg`;

                        return <Image key={image.id} image={{
                            title: image.title,
                            url: url,
                            urlLarge: urlLarge,
                            farm: image.farm,
                            server: image.server,
                            secret: image.secret,
                            id: image.id
                        }} />
                    })
                }
            </div>
          </div>
      </div>
    );
  };
  
  export default Gallery;
