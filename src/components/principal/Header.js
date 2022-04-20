import React from 'react'
import { CarouselHeader } from './CarouselHeader'

export const Header = () => {
  const imagenes = [
    { slider: 'foto1.jpeg', descripcion: 'Cortinas de Seda' },
    { slider: 'foto2.jpeg', descripcion: 'Cortinas Corredizas ' },
    { slider: 'foto3.jpeg', descripcion: 'Tapiceria color negro' },
    { slider: 'foto4.jpeg', descripcion: 'Cortinas Corredizas' },
  ]
  return (
    <div>
      <CarouselHeader imagenes={imagenes} autoPlay={true} showButton={false} />
    </div>
  )
}
