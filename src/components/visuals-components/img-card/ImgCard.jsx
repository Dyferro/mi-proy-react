import React from 'react';
import './imgcard.css';
import Boton from './../boton/Boton';

const ImgCard = ({ url, titulo, texto, boton }) => {
    return (
        <div className="tarjeta card">
            <img src={url} className="img-thumbnail card-img-top" alt="alternativo" />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{texto}</p>
                <Boton
                    estilo={"btn btn-outline-success"}
                    tipo={"submit"}
                    url={"#"}
                    texto={boton}
                />
            </div>
        </div>
    )
}

export default ImgCard