import React from 'react'
import { CarouselHeader } from './CarouselHeader'

export const Header = () => {
  const imagenes = [
    { slider: 'foto1.png', descripcion: 'Cortinas de Seda' },
    { slider: 'foto2.png', descripcion: 'Cortinas Corredizas ' },
    { slider: 'foto3.png', descripcion: 'Tapiceria color negro' },
    { slider: 'foto4.png', descripcion: 'Cortinas Corredizas' },
  ]
  return (
    <div>
      <CarouselHeader imagenes={imagenes} autoPlay={true} showButton={false} />
    </div>
  )
}
