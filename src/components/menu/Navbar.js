import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'
import home from '../../assets/svg/home.svg'
import phone from '../../assets/svg/phone.svg'
import mail from '../../assets/svg/email.svg'
import logo from '../../assets/img/logo.png'
import facebook from '../../assets/svg/facebook.svg'
import whatsapp from '../../assets/svg/whatsapp.svg'
import telegram from '../../assets/svg/telegram.svg'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
          <img
            src={logo}
            alt="logo-ideda"
            loading="lazy"
            className="navbar__img-log"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex flex-column w-100">
            <div className="d-flex justify-content-evenly my-2 d-none d-lg-flex">
              <div>
                <a href="#!" className="d-flex align-items-center">
                  <img src={home} alt="home" loading="lazy" className="me-2" />{' '}
                  Calle Camino de los Vinateros 163, 28030 Madrid
                </a>
              </div>
              <div>
                <a href="#!" className="d-flex align-items-center">
                  <img
                    src={phone}
                    alt="phone"
                    loading="lazy"
                    className="me-2"
                  />{' '}
                  69776354
                </a>
              </div>
              <div>
                <a href="#!" className="d-flex align-items-center">
                  <img src={mail} alt="email" loading="lazy" className="me-2" />{' '}
                  correo@correo.gmail.com
                </a>
              </div>
            </div>

            <div className="d-flex flex-column flex-lg-row align-items-center mt-3">
              <div className="w-25 d-flex justify-content-evenly">
                <a href="#!">
                  <img
                    src={facebook}
                    alt="facebook"
                    loading="lazy"
                    width="40px"
                  />
                </a>
                <a href="#!" className="nav__social-link">
                  <img
                    src={telegram}
                    alt="telegram"
                    loading="lazy"
                    width="40px"
                    className="mx-3"
                  />
                </a>
                <a href="#!" className="nav__social-link">
                  <img
                    src={whatsapp}
                    alt="whatsapp"
                    loading="lazy"
                    width="40px"
                  />
                </a>
              </div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-75">
                <li className="nav-item nav__link-a">
                  <a className="nav-link" aria-current="page" href="#inicio">
                    Inicio
                  </a>
                </li>
                <li className="nav-item nav__link-a">
                  <a className="nav-link" href="#somos">
                    Quiénes Somos
                  </a>
                </li>
                <li className="nav-item dropdown nav__link-a">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cortinas & Persianas
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="d-flex flex-column flex-lg-row">
                      <div className="col-4">
                        <li>
                          <p className="ms-3 text-muted">Cortinas</p>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </div>
                      <div className="col-4">
                        <li>
                          <p className="ms-3 text-muted">Persianas</p>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </div>
                      <div className="col-4">
                        <li>
                          <p className="ms-3 text-muted">Otros Productos</p>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </div>
                    </div>
                  </ul>
                </li>

                <li className="nav-item nav__link-a">
                  <a className="nav-link" href="#">
                    Servicios
                  </a>
                </li>
                <li className="nav-item nav__link-a">
                  <a className="nav-link" href="#">
                    Contactos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
