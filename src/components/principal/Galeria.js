import React from 'react'

import './galeria.css'

export const Galeria = () => {
  return (
    <>
      <h2 className="h2 text-center mb-4">
        <span>【 </span>
        Nuestra Galeria
        <span> 】</span>
      </h2>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide mb-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators d-none">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="d-flex justify-content-center  mb-4">
            <button
              className="carousel-control-prev position-relative"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next position-relative"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                      className="card-img-top"
                      alt="Peaks Against the Starry Sky"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                      className="card-img-top"
                      alt="Bridge Over Water"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                      className="card-img-top"
                      alt="Purbeck Heritage Coast"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                      className="card-img-top"
                      alt="Peaks Against the Starry Sky"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                      className="card-img-top"
                      alt="Bridge Over Water"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                      className="card-img-top"
                      alt="Purbeck Heritage Coast"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                      className="card-img-top"
                      alt="Peaks Against the Starry Sky"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                      className="card-img-top"
                      alt="Bridge Over Water"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                      className="card-img-top"
                      alt="Purbeck Heritage Coast"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
