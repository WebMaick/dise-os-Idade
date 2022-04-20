import React from 'react'
import { Detalle } from './Detalle'
import { Header } from './Header'
import { Parallax } from './Parallax'
import { Productos } from './Productos'

export const AppPrincipal = () => {
  return (
    <div>
      <Header />

      <main>
        <section className="container">
          <Detalle />
        </section>
        <section className="container">
          <Productos />
        </section>
        <section>
          <Parallax title="Diseños Para tu HOGAR" />
        </section>

        <div className="my-5">hola maick</div>
      </main>
    </div>
  )
}
