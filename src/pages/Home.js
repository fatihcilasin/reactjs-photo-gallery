import React from 'react';
import Header from "../components/Header";
import Gallery from "../components/Gallery";

function Home(){
    return(
        <div className="home">
            <Header/>
            <Gallery/>
        </div>
    )
}

export default Home;