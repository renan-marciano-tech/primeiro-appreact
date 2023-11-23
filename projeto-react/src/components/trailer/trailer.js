import React from "react";
import video from "../../assets/video.mp4"
import "./trailer.css"

function Trailer(){

    return(
        <div className="container-trailer">
            <div className="content-trailer">
                <video controls className="trailer">
                    <source src={video} />
                </video>
                <div id="sinopse">
                    <span className="descricao">
                    Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.
                    </span>
                    <button>Comprar Ingresso</button>
                </div>
            </div>
        </div>
    )
}

export default Trailer;