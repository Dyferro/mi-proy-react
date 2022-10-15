import React from 'react'
import './header.css';
import Boton from './../visuals-components/boton/Boton';

const Header = () => {
    return (
        <div className="encabezado">
            <nav className="navbar">
                <div className="container-fluid">
                    <span> Nombre Pagina</span>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Boton
                            estilo={"btn btn-outline-success"}
                            tipo={"submit"}
                            url={""}
                            texto={"Search"}
                        />
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header