import React from "react";
import Header from "../../components/Header/header";
import "../home/home.css"
import Trailer from "../../components/trailer/trailer";
import Card from "../../components/cards/card";
import Footer from "../../components/Footer/footer";

function Home() {


    return (
        <>
            <Header />
            <div id="banner"></div>
            <Trailer />
            <div></div>
            <Card/>
            <Footer/>
        </>
        
    );

}

export default Home;