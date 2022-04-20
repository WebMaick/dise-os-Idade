import React from 'react'

import './productos.css'

export const Producto = ({ producto }) => {
  const { id, categoria, titulo, fecha } = producto

  const handleProducto = (id) => {
    console.log(id)
  }
  return (
    <>
      <div className="col">
        <div className="card h-100 producto__container">
          <div className="card__img-content" onClick={() => handleProducto(id)}>
            <img
              src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?cs=srgb&dl=pexels-lisa-fotios-1006293.jpg&fm=jpg"
              className="card-img-top"
              alt="imagen"
            />

            <button
              className="btn btn-info card__btn-leer"
              onClick={() => handleProducto(id)}
            >
              Leer más +
            </button>
          </div>
          <div className="card-body">
            <figure>
              <blockquote className="blockquote">
                <p className="lead text-uppercase card__producto-categoria">
                  {categoria}
                </p>
              </blockquote>
              <figcaption className="blockquote-footer card__producto-descr">
                DESCRIPCIÓN:
                <cite title="Source Title"> {titulo}</cite> <br />
                <p className="card__fecha">
                  Actualizado:
                  <cite title="Source Title"> {fecha}</cite>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  )
}
