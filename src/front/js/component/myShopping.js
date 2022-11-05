import React, { useContex } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export function MyShopping() {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);

    let direccion = data.direccion;
    let region = data.region;
    let telefono = data.telefono;
    let users_id = store.user?.usuario?.id;
    let comentarios = data.descripcion;
    sessionStorage.setItem("direccion", JSON.stringify(direccion));
    sessionStorage.setItem("region", JSON.stringify(region));
    sessionStorage.setItem("telefono", JSON.stringify(telefono));
    sessionStorage.setItem("comentarios", JSON.stringify(comentarios));

    console.log(direccion, region, telefono, users_id);
    actions.orderProduct(direccion, region, telefono, users_id, navigate);
    direccion = "";
    region = "";
    telefono = "";
    users_id = null;
    comentarios = "";
  };
  return (
    <>
      <div className="login container my-5 d-flex justify-content-center align-items-center">
        <div className="card col-md-6">
          <div className="card-header ">
            <h5 className="card-title fw-bold fs-3">
              Formulario de cotización
            </h5>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-5 px-2">
              {/* Tu nombre */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="nombre">
                  Tu nombre completo
                </label>

                <div className="col-md-12 px-5">
                  <input
                    className="form-control"
                    value={`${store.user?.usuario?.nombre} ${store.user?.usuario?.apellido}`}
                    type="text"
                    {...register("nombre", {
                      required: true,
                    })}
                    readOnly
                  />
                </div>
              </div>

              {/* Tu producto */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="producto">
                  Tu producto
                </label>

                <div className="col-md-12 px-5">
                  <input
                    className="form-control"
                    value={JSON.parse(sessionStorage.getItem("articulo"))}
                    id="producto"
                    name="producto"
                    type="text"
                    {...register("producto_id", {
                      required: true,
                    })}
                    readOnly
                  />
                </div>
              </div>

              {/* Tu Direccion */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="direccion">
                  Escribe tu dirección
                </label>

                <div className="col-md-12 px-5">
                  <input
                    className="form-control"
                    id="direccion"
                    name="direccion"
                    type="text"
                    {...register("direccion", {
                      required: true,
                    })}
                  />
                  {errors?.direccion?.type === "required" && (
                    <div className="statusError mt-1">
                      Debes llenar este campo
                    </div>
                  )}
                </div>
              </div>
              {/* region */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="region">
                  Indica tu región
                </label>

                <div className="col-md-12 px-5">
                  <input
                    className="form-control"
                    id="region"
                    name="region"
                    type="text"
                    {...register("region", {
                      required: true,
                    })}
                  />
                  {errors?.region?.type === "required" && (
                    <div className="statusError mt-1">
                      Debes llenar este campo
                    </div>
                  )}
                </div>
              </div>

              {/* Tu teléfono */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="telefono">
                  Escribe un número de contacto
                </label>

                <div className="col-md-12 px-5">
                  <input
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    type="text"
                    {...register("telefono", {
                      required: true,
                    })}
                  />
                  {errors?.telefono?.type === "required" && (
                    <div className="statusError mt-1">
                      Debes llenar este campo
                    </div>
                  )}
                </div>
              </div>

              {/* descripcion */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="descripcion">
                  Comentarios
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
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
