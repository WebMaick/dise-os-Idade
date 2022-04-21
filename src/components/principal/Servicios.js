import React from 'react'
import { SliderShow } from '../carousel/SliderShow'

import './servicios.css'

export const Servicios = () => {
  return (
    <div className="my-5 servicios__container">
      <h2 className="h2 text-center mb-4">
        <span>【 </span>
        Servicios profesionales de IDADE
        <span> 】</span>
      </h2>
      <p className="producto__subtitle container">
        En <small>IDADE</small> te ofrecemos todos los servicios necesarios para
        comprar tus cortinas, estores, percianas y tapiceria a medida en Bolivia
      </p>

      <SliderShow />

      <p className="container producto__subtitle">
        Nuetros servicios profesionales, en IDADE te ofrecemos todos los
        servicios necesarios para comprar tus cortinas a medida que el cliente
        en el tipo de cortina a elegir. En IDADE te ofrecemos asesoramiento y
        nos desplazamos a tu domicilio o lugar de trabajo con los muestrarios de
        los productos que previamente nos solicites, realizamos la toma de
        medidas y te asesoramos en la elección de tus cortinas. Si necesitas mas
        información sobre cualquiera de nuestros servicios no dudes en contactar
        con nosotros, en IDADE encontrarás un asesoramiento personalizado en tu
        elección de tus cortinas o estores a medida, un servicio profesional de
        instalación de todo tipo de rieles y barras para cortinas y un servicio
        integral de tapicería. No esperes más y conoce por qué IDADE es una de
        las mejores tiendas de cortinas a medida en BOLIVIA.
      </p>
    </div>
  )
}
