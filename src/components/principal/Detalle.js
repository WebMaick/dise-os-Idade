import React from 'react'

import './detalle.css'

export const Detalle = () => {
  return (
    <div className="detalle__container py-4">
      <h2 className="h2 text-center mb-4">
        <span>【 </span>
        Expertos en telas en BOLIVIA
        <span> 】</span>
      </h2>
      <div className="row">
        <div className="col-md-9 somos__container mb-3 d-flex justify-content-center align-items-center fst-italic">
          <p className="my-3">
            -- Somos una empresa creada con el fin de brindar a nuestros
            clientes alternativas{' '}
            <b className="text-info fw-bold">modernas e innovadoras</b> para
            recubrir sus ventanas y decorar los ambientes del hogar y oficina.
            Ofrecemos no solo elementos decorativos, sino también que ayuden a
            regular el grado de{' '}
            <b className="text-info fw-bold">luminosidad, temperatura</b> y{' '}
            <b className="text-info fw-bold">rayos ultravioleta.</b>
          </p>
        </div>
        <div className="col-md-3 mb-3">
          <div className="principal__catalogo text-center">
            <button className="principal__catalogo-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="teal"
              >
                <path d="M13 2.004c5.046.504 9 4.783 9 9.97 0 1.467-.324 2.856-.892 4.113l1.738 1.005c.732-1.553 1.154-3.284 1.154-5.117 0-6.304-4.842-11.464-11-11.975v2.004zm-10.109 14.083c-.568-1.257-.891-2.646-.891-4.112 0-5.188 3.954-9.466 9-9.97v-2.005c-6.158.511-11 5.671-11 11.975 0 1.833.421 3.563 1.153 5.118l1.738-1.006zm17.213 1.734c-1.817 2.523-4.769 4.174-8.104 4.174s-6.288-1.651-8.105-4.175l-1.746 1.01c2.167 3.123 5.768 5.17 9.851 5.17 4.082 0 7.683-2.047 9.851-5.168l-1.747-1.011zm-8.104-13.863c-4.419 0-8 3.589-8 8.017s3.581 8.017 8 8.017 8-3.589 8-8.017-3.581-8.017-8-8.017zm-2 11.023v-6.013l6 3.152-6 2.861z" />
              </svg>
              <div className="principal__catalogo-detail bg-primary text-light">
                <p>Nuestros Productos </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
