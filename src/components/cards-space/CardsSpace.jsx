import React from 'react'
import ImgCard from './../visuals-components/img-card/ImgCard';

const CardsSpace = () => {
    return (
        <div className='container portafolio row text-center'>
            <div className="row">
                <ImgCard
                    titulo={'Prueba'}
                    texto={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n Nemo ullam voluptatibus fugiat in dignissimos ad ipsam blanditiis aspernatur illo adipisci nam architecto, id perspiciatis sed tenetur provident totam natus amet.'}
                    boton={'Next'}
                    url={''}
                />
            </div>
            <div className="row align-items-center">
                <div className="col">
                    <ImgCard
                        titulo={'Prueba1'}
                        texto={'It Works'}
                        boton={'Next'}
                        url={''}
                    />
                </div>
                <div className="col">
                    <ImgCard
                        titulo={'Prueba2'}
                        texto={'It Works'}
                        boton={'Next'}
                        url={''}
                    />
                </div>
                <div className="col">
                    <ImgCard
                        titulo={'Prueba3'}
                        texto={'It Works very well'}
                        boton={'Next'}
                        url={''}
                    />
                </div>
                <div className="col">
                    <ImgCard
                        titulo={'Prueba3'}
                        texto={'It Works very well'}
                        boton={'Next'}
                        url={''}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardsSpace