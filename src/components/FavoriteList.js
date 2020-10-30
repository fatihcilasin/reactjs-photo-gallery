import React, { useContext } from 'react';
import { Context } from "../hooks/Store";
import Image from "./Image";

const FavoriteList = props =>{
    const [state] = useContext(Context);
    console.log(state.favorites);
    return (
        <div className="container">
            <div className="row favorite-list">
                {

                    state.favorites.map(image => {
                        let url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`;

                        return <Image
                            image={{
                                title: image.title,
                                url: url,
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