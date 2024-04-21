import React from 'react'
import { Link } from 'react-router-dom';
import { editarMedia } from '../../servicios/MedServicios';

export default function CardMed(props) {

    const {media} = props; 

  return (
    <div className="col">
        <div className="card">
          <img src= {media.imagen} className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Cartelera</h5>
            <p className="card-text">{`Serial: ${media.serial}`}</p>
            <p className="card-text">{`Titulo: ${media.titulo}`}</p>
            <p className="card-text">{`Sinopsis: ${media.sinopsis}`}</p>
            <p className="card-text">{`URL: ${media.url}`}</p>
            <p className="card-text">{`Fecha: ${media.fechaCreacion}`}</p>
            <p className="card-text"></p>
            <Link to={media/editarMedia}>More..</Link>
          </div>
        </div>
      </div>
  )
}
