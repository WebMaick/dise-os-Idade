import React from 'react'
import { CarouselHeader } from './CarouselHeader'

const imagenes = [
  { slider: 'ffoto1.jpeg', descripcion: 'Cortinas de Seda' },
  { slider: 'ffoto2.jpeg', descripcion: 'Cortinas Corredizas ' },
  { slider: 'ffoto3.jpeg', descripcion: 'Tapiceria color negro' },
  { slider: 'foto4.jpeg', descripcion: 'Cortinas Corredizas' },
]

export const ProyectosRecientes = () => {
  return (
    <div>
      <h2 className="h2 text-center mb-4">
        <span>【 </span>
        Proyectos Recientes
        <span> 】</span>
      </h2>
      <p className="producto__subtitle container">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        numquam quo repellendus unde modi nihil. Voluptas minus tempore et
        dolorum ex velit esse non aut.
      </p>
      <CarouselHeader imagenes={imagenes} autoPlay={true} showButton={false} />
    </div>
  )
}
