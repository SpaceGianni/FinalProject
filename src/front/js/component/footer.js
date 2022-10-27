import React, { Component } from "react";
import imagenFinal from "../../img/Logo_proyecto_final.png";
import { Link } from "react-router-dom";

export const Footer = () => (
  <>
    <footer id="coverFooter" className="footer text-center mt-auto py-3 bg-success text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/">
              <p>
                <img id="footerImage" src={imagenFinal} />
              </p>
            </Link>
          </div>
          <div className="col-md-4">
            <p>Inicio</p>
            <p>Sobre Nosotros</p>
          </div>
          <div className="col-md-4">
            <p>Contacto</p>
            <p>Trabaja con nosotros</p>
          </div>
        </div>
      </div>
    </footer>
  </>
);
