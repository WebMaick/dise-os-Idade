import React from 'react'

import './parallax.css'
export const Parallax = ({ title = 'Bienvenido' }) => {
  return (
    <div className="parallax__container">
      <div className="parallax__content">
        <h3 className="parallax__content-title">{title}</h3>
      </div>
    </div>
  )
}
