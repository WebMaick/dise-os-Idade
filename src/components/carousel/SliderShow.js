import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import './sledershow.css'

const imagenes = require.context('../../assets/img/servicios', true)

export const SliderShow = () => {
  return (
    <div className="carousel__contain">
      <Carousel
        autoPlay
        infiniteLoop
        interval={7000}
        className="carousl__altura"
        dynamicHeight
      >
        <div>
          <img src={imagenes('./carousel-1.jpg')} />
          <div className="legend">
            <h3>Asesoramiento</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              amet, optio possimus laborum dolorum magni exercitationem quae
              totam nisi quidem suscipit numquam animi id maiores ipsa? Dolor ad
              eum error?
            </p>
          </div>
        </div>
        <div>
          <img src={imagenes('./carousel-2.jpg')} />
          <div className="legend">
            <h3>Instalación de cortinas</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              amet, optio possimus laborum dolorum magni exercitationem quae
              totam nisi quidem suscipit numquam animi id maiores ipsa? Dolor ad
              eum error?
            </p>
          </div>
        </div>
        <div>
          <img src={imagenes('./carousel-3.jpg')} />
          <div className="legend">
            <h3>Tapicería</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              amet, optio possimus laborum dolorum magni exercitationem quae
              totam nisi quidem suscipit numquam animi id maiores ipsa? Dolor ad
              eum error?
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
