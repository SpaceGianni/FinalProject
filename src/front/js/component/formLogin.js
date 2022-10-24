import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export function FormLogin() {
  const { store, actions } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //no hay errores
    if (store.errors === "") {
      navigate('/')
    } 
  };
  return (
    <>
      <div className="container my-5">
        <div className="card">
          <div className="card-header ">
            <h5 className="card-title fw-bold fs-3">Inicio Sesion</h5>
          </div>
          <div className="card-body"></div>
          <form className="row mb-3" onSubmit={handleSubmit}>
            <div>
              <label className="col-md-6 col-form-label px-5" htmlFor="email">
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
              <label
                className="col-md-6 col-form-label px-5"
                htmlFor="password"
              >
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
            <div className="card-footer d-flex justify-content-center">
              
                <button
                  type="submit"
                  onClick={() => actions.signIn(email, password)}
                  className="btn btn-success btn-md"
                >
                  Ingresar
                </button>
                    <button onClick={()=>{console.log(store.errors)}}>hola</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
