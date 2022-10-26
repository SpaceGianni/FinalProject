import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export function FormLogin() {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  return (
    <>
      <div className="login container my-5 d-flex justify-content-center align-items-center">
        <div className="card col-md-6">
          <div className="card-header ">
            <h5 className="card-title fw-bold fs-3">Inicio Sesion</h5>
          </div>
          <div className="card-body"></div>
          
            <div>
              <label className="col-form-label px-5" htmlFor="email">
                Correo
              </label>
              <div className="col-md-12 px-5">
                {store.errors !== "" && (
                  <div className="alert alert-danger" role="alert">
                    {store.errors?.mensaje}
                  </div>
                )}
                <input
                  className="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="juanito@example.cl"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div className="pb-5">
              <label className="col-form-label px-5" htmlFor="password">
                Contraseña
              </label>

              <div className="col-md-12 px-5">
                {store.errors !== "" && (
                  <div className="alert alert-danger" role="alert">
                    {store.errors?.mensaje}
                  </div>
                )}
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form-control"
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
            </div>
            <div className="card-footer d-flex justify-content-center py-3">
            <div >
              <button
                type="submit"
                onClick={() => actions.logIn(email, password, navigate)}
                className="btn btn-success btn-md col-md-12"
              >
                Ingresar
              </button>
              
              <Link to="/register">
                <button
                  className="btn mx-2 btn-md d-block"
                >
                  Registrarse
                </button>
              </Link>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
}
