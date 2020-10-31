import React, { useContext, useEffect } from 'react';
import { Context } from "../hooks/Store";
import Image from "./Image";

const FavoriteList = props =>{
    const [state] = useContext(Context);

    return (
        <div className="container">
            <div className="row favorite-list">
                {
                    state.favorites.map(image => {
                        let url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`;
                        let urlLarge = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_c.jpg`;

                        return <Image
                            key={image.id}
                            image={{
                                title: image.title,
                                url: url,
                                urlLarge: urlLarge,
                                farm: image.farm,
                                server: image.server,
                                secret: image.secret,
                                id: image.id
                            }}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default FavoriteList;