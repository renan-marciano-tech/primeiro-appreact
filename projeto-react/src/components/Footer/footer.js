import React from "react";
import Logo from "../../assets/red-batman-logo-tngejsmbolqy2di4.jpg"
import "./footer.css"


function Footer(){

    return(
        <footer>
            <img src={Logo} style={{objectFit:"contain"}} id="logo-footer" />
            <span>Desenvolvido por Renan Marciano de Carvalho ©</span>

            <nav className="footer-responsivo">
                <ul className="footer-list">
                                      
                    <li>Home</li>
                                      
                    <li>Contato</li>
                                      
                    <li>Fotos</li>
                    
                    <li>Comentários</li>
                </ul>
            </nav>

        </footer>
    )
}

export default Footer;