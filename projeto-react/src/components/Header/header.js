import React from "react";
import './styleheader.css'
import { Link } from "react-router-dom";
import Home from "../../pages/home/home";
import Contato from "../../pages/contato/contato";
import Fotos from "../../pages/Fotos/fotos";
import Logo from "../../assets/red-batman-logo-tngejsmbolqy2di4.jpg"

function Header(){

    return(
        <header>
            <img src={Logo} className="logo"/>
            <nav>
                <ul>
                    <Link to='/'>                  
                    <li>Home</li>
                    </Link>
                    <Link to='/contato'>                    
                    <li>Contato</li>
                    </Link>
                    <Link to='/fotos'>                    
                    <li>Fotos</li>
                    </Link>
                    <li>Comentários</li>
                </ul>
            </nav>
        </header>
    )

}

export default Header; 