import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../hooks/Store';
import axios from 'axios';
import {FLICKR_API_KEY} from "../config";

function Header(){
    const [state, dispatch] = useContext(Context);
    const [search, setSearch] = useState('Sport Car');
    useEffect(() => {
        runSearch()
    }, [search])

    async function runSearch(){
        if(search === '' || search.length < 3) return;

        dispatch({type: 'SET_LOADING', payload: true});
        await axios
            .get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
            ).then(response => {
                dispatch({type: 'SET_IMAGES', payload: response.data.photos.photo});
                dispatch({type: 'SET_LOADING', payload: false});
            }).catch(error => {
                console.log("Encountered an error with fetching and parsing data", error);
            });
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="javascript:;">ReactJS Photo Gallery</a>
                    <form className="form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                    </form>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="text-center my-5">Image results for '{search}'</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;