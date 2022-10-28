import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function MyShopping() {
  const { store, actions } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.imagen[0]);
    let formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("imagen", data.imagen[0]);
    formData.append("precio", data.precio);
    formData.append("descripcion", data.descripcion);
    formData.append("active", true);

    actions.postImage(formData);
  };
  return (
    <>

      <div className="login container my-5 d-flex justify-content-center align-items-center">
        <div className="card col-md-6">
          <div className="card-header ">
            <h5 className="card-title fw-bold fs-3">Formulario de cotización</h5>
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
                    id="nombre"
                    name="nombre"
                    type="text"
                    disabled />
                </div>
              </div>

              {/* Tu pedido */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="precio">
                  Tu pedido
                </label>

                <div className="col-md-12 px-5">
                  <input
                    className="form-control"
                    value={`${store.user?.usuario?.nombre} ${store.user?.usuario?.apellido}`}
                    id="precio"
                    name="precio"
                    type="number"
                    {...register("precio", {
                      required: true,
                    })}
                    disabled />
                </div>
              </div>

              {/* Tu Direccion */}
              <div className="pb-2">
                <label className="col-form-label px-5" htmlFor="direccion">
                  Escribe tu dirección, comuna y región
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
    </>
  );
}
