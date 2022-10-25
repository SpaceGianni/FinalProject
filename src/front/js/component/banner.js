import React from "react";

export const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img src="https://st.depositphotos.com/1486923/1948/i/450/depositphotos_19486333-stock-photo-fruit-background.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src="https://img.freepik.com/foto-gratis/campo-fresas_1203-7581.jpg?w=2000" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src="https://cdn.palbincdn.com/images/blog/gallery/Evolucion-metodos-de-pago.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
