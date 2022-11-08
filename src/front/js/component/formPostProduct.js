import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export function FormPostProduct() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(store.user?.usuario?.id)
  let date = new Date();
  
  const onSubmit = (data) => {
    console.log(data);
    console.log(data.imagen[0]);
    let formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("imagen", data.imagen[0]);
    formData.append("precio", data.precio);
    formData.append("descripcion", data.descripcion);
    formData.append("users_id", store.user?.usuario?.id);
    formData.append("fecha_publicacion", date.toISOString().split('T')[0]);
    formData.append("active", true);

    actions.postImage(formData, navigate);
  };
  return (
    <>

      <div className="container my-5 d-flex justify-content-center align-items-center">
        <div className="card col-md-6">
          <div className="card-header ">
            <h5 className="card-title fw-bold fs-3">Registro del Producto</h5>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-5 px-2">
              {/* input nombre producto */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="nombre">
                  Nombre del producto
                </label>

                <div className="col-md-12 px-5">
                  <input
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    type="text"
                    {...register("nombre", {
                      required: true,

                      pattern: /^[a-zA-Z ]+$/,
                    })}
                  />
                  {errors?.nombre?.type === "required" && (
                    <div className="statusError mt-1">
                      Debes llenar este campo
                    </div>
                  )}
                  {errors?.nombre?.type === "pattern" && (
                    <div className="statusError mt-1">
                      Este campo solo acepta nombre sin espacio y sin numeros
                    </div>
                  )}
                </div>
              </div>
              {/* input image */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="imagen">
                  Inserte imagen
                </label>
                <div className="col-md-12 px-5">
                  <input
                    className="form-control"
                    id="imagen"
                    name="imagen"
                    type={"file"}
                    {...register("imagen", {
                      required: true,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors?.imagen?.type === "required" && (
                    <div className="statusError mt-1">
                      Debes llenar este campo
                    </div>
                  )}
                </div>
              </div>

                    {/* precio */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="precio">
                  Precio por KG
                </label>

                <div className="col-md-12 px-5">
                  <input
                    className="form-control"
                    id="precio"
                    name="precio"
                    type="number"
                    {...register("precio", {
                      required: true,
                    })}
                  />
                  
                  {errors?.precio?.type === "required" && (
                    <div className="statusError mt-1">
                      Debes llenar este campo
                    </div>
                  )}

                </div>
              </div>


                    {/* descripcion */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="descripcion">
                  Descripcion
                </label>

                <div className="col-md-12 px-5">
                  <textarea
                    className="form-control"
                    id="descripcion"
                    name="descripcion"
                    type="text"
                    {...register("descripcion", {
                      required: true,
                    })}
                  />
                  {errors?.descripcion?.type === "required" && (
                    <div className="statusError mt-1">
                      Debes llenar este campo
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="card-footer d-flex justify-content-center py-3">
              <div>
                <button type="submit" className="btn btn-success btn-md col-12">
                  Registrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
