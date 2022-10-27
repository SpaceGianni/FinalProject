import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function FormRegister() {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    actions.signIn(email, password, nombre, apellido, navigate)  
  }; // your form submit function which will invoke after successful validation

//    check password event 
  const password = watch('password')

  console.log(watch("password")); // you can watch individual input by pass the name of the input

  return (
    <>
      <div className="login container my-5 d-flex justify-content-center align-items-center">
        <div className="card col-md-6">
          <div className="card-header ">
            <h5 className="card-title fw-bold fs-3">Registro de usuario</h5>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-5 px-2">
              {/* input nombre */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="nombre">
                  Nombre
                </label>

                <div className="col-md-12 px-5">
                  <input
                    onChange={(e) => {
                      setNombre(e.target.value);
                    }}
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    type="text"
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                      minLength: 2,
                      pattern: /^[a-zA-Z]+$/,
                    })}
                  />
                  {errors?.firstName?.type === "required" && (
                    <div className="statusError mt-1">
                      Debes llenar este campo
                    </div>
                  )}
                  {errors?.firstName?.type === "pattern" && (
                    <div className="statusError mt-1">
                      Este campo solo acepta nombre sin espacio y sin numeros
                    </div>
                  )}
                  {errors?.firstName?.type === "maxLength" && (
                    <div className="statusError mt-1">
                      Este campo no puede ser mayor a 20 caracteres
                    </div>
                  )}
                  {errors?.firstName?.type === "minLength" && (
                    <div className="statusError mt-1">
                      Este campo no puede ser menor a 2 caracteres
                    </div>
                  )}
                </div>
              </div>
              {/* input Apellido */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="lastName">
                  Apellido
                </label>

                <div className="col-md-12 px-5">
                  <input
                    onChange={(e) => {
                      setApellido(e.target.value);
                    }}
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    type="text"
                    {...register("lastName", {
                      required: true,
                      maxLength: 20,
                      minLength: 2,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors?.lastName?.type === "required" && (
                    <div className="statusError mt-1">
                      Debes llenar este campo
                    </div>
                  )}
                  {errors?.lastName?.type === "pattern" && (
                    <div className="statusError mt-1">
                      Este campo solo acepta nombre sin espacio y sin numeros
                    </div>
                  )}
                  {errors?.lastName?.type === "maxLength" && (
                    <div className="statusError mt-1">
                      Este campo no puede ser mayor a 20 caracteres
                    </div>
                  )}
                  {errors?.lastName?.type === "minLength" && (
                    <div className="statusError mt-1">
                      Este campo no puede ser menor a 2 caracteres
                    </div>
                  )}
                </div>
              </div>
              {/* input correo */}
              <div className="pb-2">
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
                    {...register("eMail", {
                      required: true,
                      maxLength: 60,
                      minLength: 2,
                      pattern: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
                    })}
                  />
                  {errors?.eMail?.type === "required" && (
                    <div className="statusError mt-1">
                      Debes llenar este campo
                    </div>
                  )}
                  {errors?.eMail?.type === "pattern" && (
                    <div className="statusError mt-1">
                      Este campo solo acepta una direccion de correo valida con
                      @ incluido
                    </div>
                  )}
                  {errors?.eMail?.type === "maxLength" && (
                    <div className="statusError mt-1">
                      Este campo no puede ser mayor a 50 caracteres
                    </div>
                  )}
                </div>
              </div>
              {/* input contraseña */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="password">
                  Contraseña
                </label>

                <div className="col-md-12 px-5">
                
                  <input             
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}     
                  placeholder="Password"
                    className="form-control"
                    id="password"
                    name="password"
                    type="text"
                    onPaste={(e)=>{
                      e.preventDefault()
                      return false;
                    }}

                    {...register("password", {
                      required: true,
                      maxLength: 16,
                      minLength: 8,
                      pattern: /(?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    })}    
                  />
                  {errors?.pass?.type === "required" && (
                    <div className="statusError mt-1">
                      Debes llenar este campo
                    </div>
                  )}
                  {errors?.pass?.type === "pattern" && (
                    <div className="statusError mt-1">
                      Este campo debe contener letras y numeros y una mayuscula
                    </div>
                  )}
                  {errors?.pass?.type === "maxLength" && (
                    <div className="statusError mt-1">
                      Este campo no puede ser mayor a 16 caracteres
                    </div>
                  )}
                  {errors?.pass?.type === "minLength" && (
                    <div className="statusError mt-1">
                      Este campo no puede ser menor a 8 caracteres
                    </div>
                  )}
                </div>
              </div>
              {/* input confirmar contraseña */}
              <div className="pb-2">
            <label
              className="col-form-label px-5"
              htmlFor="confirmarContraseña"
            >
              Confirmar contraseña
            </label>

            <div className="col-md-12 px-5">         
              <input
                /* onChange={(e) => {
                  setConfirmPass(e.target.value);
                }} */
                className="form-control"
                id="confirmarContraseña"
                name="confirmarContraseña"
                type="text"
                {...register("confirmPassword", { required: 'confirm password is required',
                    validate: (value) =>
                    value === password || "The passwords do not match",
                 })}
              />
              {errors.confirmPassword && <span className="statusError mt-1">{errors.confirmPassword.message}</span>}
             
            </div>
          </div>
            </div>

            <div className="card-footer d-flex justify-content-center py-3">
              <div>
                <button
                  type="submit"
                  /* onClick={() => {
                    actions.signIn(email, password, nombre, apellido, navigate)             
                  }} */
                  className="btn btn-success btn-md col-12"
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
          <button onClick={() => {
                   console.log(email);         
                  }} className="btn mx-2 btn-md d-block">
                    xxxxx
                  </button>
        </div>
      </div>
      {console.log(
        nombre,
        " ",
        apellido,
        " ",
        email,
        " ",
        pass,
        " ",
       
      )}
    </>
  );
}