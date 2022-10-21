import React from "react";

export const Banner = () => {
    return (
        <>
        <div className="container">
         <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div id="banner" className="carousel-inner">
                <div className="carousel-item active">
                     <img src="https://st.depositphotos.com/1486923/1948/i/450/depositphotos_19486333-stock-photo-fruit-background.jpg" className="uno w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/foto-gratis/campo-fresas_1203-7581.jpg?w=2000" className="dos w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.palbincdn.com/images/blog/gallery/Evolucion-metodos-de-pago.png" className="tres w-100"  alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
         </div>
         </div>
        </>
    );
};