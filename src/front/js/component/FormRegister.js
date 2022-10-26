import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function FormRegister() {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const [flag, setFlag] = useState(true)

  //Variables del hook form
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nombre: "",
      apellido: ""
    }
  });


  return (
    <>
      <div className="login container my-5 d-flex justify-content-center align-items-center">
        <div className="card col-md-6">

          <form onSubmit={handleSubmit((data) => { console.log(data) })}>

            <div className="card-header ">
              <h5 className="card-title fw-bold fs-3">Registro de usuario</h5>
            </div>
            {/* input nombre */}
            <div className="pb-5">
              <label className="col-form-label px-5" htmlFor="nombre">
                Nombre
              </label>

              <div className="col-md-12 px-5">
                <input
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  type="text"
                  {...register("nombre", { required: "Este campo es obligatorio", message: "Debes ingresat tu nombre", pattern: /^[A-Za-z]+$/i })}
                />
              </div>
              <p>{errors.nombre?.message}</p>
            </div>
            {/* input Apellido */}
            <div className="pb-5">
              <label className="col-form-label px-5" htmlFor="lastName">
                Apellido
              </label>

              <div className="col-md-12 px-5">
                {/* {store.errors !== "" && (
                
              )} */}
                <input
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  type="text"
                  {...register("apellido", { required: "Es obligatorio ingresar el apellido", message: "apellido obligatorio", pattern: /^[A-Za-z]+$/i })}
                  placeholder="tu nombre"
                />
                <p>{errors.apellido?.message} </p>
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
                  placeholder="juanito@example.cl"
                  id="email"
                  name="email"
                  type="email"
                  {...register("email", { required: "Es obligatorio ingresar el email", pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
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
          </form>
        </div>
      </div>
      {
        console.log(
          nombre,
          " ",
          apellido,
          " ",
          email,
          " ",
          password,
          " ",
          confirmPass
        )
      }
    </>
  );
}