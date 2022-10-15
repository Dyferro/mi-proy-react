import React from 'react'

const Boton = ({ texto, url, estilo, tipo }) => {
    return (
        <button href={url} className={estilo} type={tipo}>{texto}</button>
    )
}

export default Boton