import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export function FormRegister() {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const [flag, setFlag] = useState(true)

/* const formAlert = ()=>{
  const fNombre = ()=>{
    if(nombre === ""){

    }
  }
  const fApellido = ()=>{}
  const fEmail = ()=>{}
  const fPassword = ()=>{}
  const fCpassword = ()=>{}
  
}
 */

  return (
    <>
      <div className="login container my-5 d-flex justify-content-center align-items-center">
        <div className="card col-md-6">
          <div className="card-header ">
            <h5 className="card-title fw-bold fs-3">Registro de usuario</h5>
          </div>
          <div className="card-body"></div>

          {/* input nombre */}
          <div className="pb-5">
            <label className="col-form-label px-5" htmlFor="nombre">
              Nombre
            </label>

            <div className="col-md-12 px-5">
            
                <div className={"alert alert-danger"+(flag === false ? "errorState" : "")} role="alert">
                  alberto cualquier cosa para probar
                </div>

              <input
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
                className="form-control"
                id="nombre"
                name="nombre"
                type="text"
              />
            </div>
          </div>
          {/* input Apellido */}
          <div className="pb-5">
            <label className="col-form-label px-5" htmlFor="lastName">
              Apellido
            </label>

            <div className="col-md-12 px-5">
              {/* {store.errors !== "" && (
                <div className="alert alert-danger" role="alert">
                  {store.errors?.mensaje}
                </div>
              )} */}
              <input
                onChange={(e) => {
                  setApellido(e.target.value);
                }}
                className="form-control"
                id="lastName"
                name="lastName"
                type="text"
              />
            </div>
          </div>
          {/* input correo */}
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
          {/* input contraseña */}
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
          {/* input confirmar contraseña */}
          <div className="pb-5">
            <label
              className="col-form-label px-5"
              htmlFor="confirmarContraseña"
            >
              Confirmar contraseña
            </label>

            <div className="col-md-12 px-5">
              {store.errors !== "" && (
                <div className="alert alert-danger" role="alert">
                  {store.errors?.mensaje}
                </div>
              )}
              <input
                onChange={(e) => {
                  setConfirmPass(e.target.value);
                }}
                className="form-control"
                id="confirmarContraseña"
                name="confirmarContraseña"
                type="password"
              />
            </div>
          </div>

          <div className="card-footer d-flex justify-content-center py-3">
            <div>
              <button
                type="submit"
                onClick={() =>
                  actions.signIn(email, password, nombre, apellido, navigate) && setFlag(false)
                }
                className="btn btn-success btn-md col-md-12"
              >
                Registrar
              </button>

              <Link to="/login">
                <button className="btn mx-2 btn-md d-block">
                  Volver a Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {console.log(
        nombre,
        " ",
        apellido,
        " ",
        email,
        " ",
        password,
        " ",
        confirmPass
      )}
    </>
  );
}
