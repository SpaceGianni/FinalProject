import React from "react";
import { Link } from "react-router-dom";

const Card = ({post, index}) => {
  //caption
  return (
    <>

          <div className="col-md-4 py-3" key={index}>
            <div className="card h-100">
              <img
                src={post.imagen}
                className="card-img-top h-100"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">$ {post.precio}</h5>
                <p className="card-text">{post.nombre}</p>
                <Link to={`/ProDetail/${post.id}`} className="btn btn-primary rounded-pill d-flex justify-content-center">
                  Ver Producto
                </Link>
               {/*  <Link
          to={`personaje/${uid}/detail`}
          className="btn btn-dark"
          id="boton-personajes"
        >
          Ver más
        </Link> */}
              </div>
            </div>
          </div>

    </>
  );
};

export default Card;
