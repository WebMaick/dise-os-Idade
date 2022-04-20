import React from 'react'
import { Producto } from './Producto'

import './productos.css'

const productos = [
  {
    id: 1,
    categoria: 'Cortinas',
    titulo: 'Revisa nuestro, productos telas y sus gamas de colores',
    fecha: '20/04/2022',
  },
  {
    id: 2,
    categoria: 'Estores',
    titulo: 'Tratamientos para el control de luz y privacidad',
    fecha: '20/04/2022',
  },
  {
    id: 3,
    categoria: 'Persianas',
    titulo: 'Tratamientos para el control de luz y privacidad',
    fecha: '20/04/2022',
  },
  {
    id: 4,
    categoria: 'Tapiceria',
    titulo: 'Tratamientos para el control de luz y privacidad',
    fecha: '20/04/2022',
  },
]

export const Productos = () => {
  return (
    <div className="my-5 p-2">
      <h2 className="h2 text-center mb-4">
        <span>【 </span>
        Brindamos un servicio especializado
        <span> 】</span>
      </h2>
      <p className="producto__subtitle">
        Fabricamos todas las líneas a solicitud de nuestros clientes, a partir
        de las especificaciones recibidas, selección de estilos y exigencias del
        lugar donde se ubicará, de ahí que el producto se elabore a la medida
        necesaria y luzca perfecta en la ventana donde se instalará.
      </p>
      <div className="row row-cols-1  row-cols-md-2 row-cols-lg-3 g-4">
        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  )
}
