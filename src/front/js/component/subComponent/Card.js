import React from "react";
import { Link } from "react-router-dom";

const Card = ({image, index}) => {
  return (
    <>

          <div className="col-md-4 py-3" key={index}>
            <div className="card ">
              <img
                src={image.url}
                className="card-img-top "
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{image.title}</h5>
                <p className="card-text">{image.name}</p>
                <Link to="/ProDetail" className="btn btn-primary rounded-pill">
                  Ver Producto
                </Link>
              </div>
            </div>
          </div>

    </>
  );
};

export default Card;
