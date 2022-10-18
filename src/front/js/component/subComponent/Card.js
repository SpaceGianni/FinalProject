import React from "react";
import { Link } from "react-router-dom";

const Card=()=> {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 h-25">
            <div className="card ">
              <img
                src="https://picsum.photos/id/237/300"
                className="card-img-top "
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">$1.000</h5>
                <p className="card-text">nombre</p>
                <Link to="/demo" className="btn btn-primary rounded-pill">
                  Ver Producto
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="card">
              <img
                src="https://picsum.photos/id/237/300"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">$1.000</h5>
                <p className="card-text">nombre</p>
                <Link to="/demo" className="btn btn-primary rounded-pill">
                  Ver Producto
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="card">
              <img
                src="https://picsum.photos/id/237/300"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">$1.000</h5>
                <p className="card-text">nombre</p>
                <Link to="/demo" className="btn btn-primary rounded-pill">
                  Ver Producto
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="card">
              <img
                src="https://picsum.photos/id/237/300"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">
                <h5 className="card-title">$1.000</h5>
                <p className="card-text">nombre</p>
                <Link to="/demo" className="btn btn-primary rounded-pill">
                  Ver Producto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;