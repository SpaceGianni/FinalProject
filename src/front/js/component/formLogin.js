import React from "react";

export function FormLogin() {
  const formRef = React.useRef();
  function handleSubmit(evt) {
    evt.preventDefault();
    /*
        1. Usamos FormData para obtener la información
        2. FormData requiere la referencia del DOM,
           gracias al REF API podemos pasar esa referencia
        3. Finalmente obtenemos los datos serializados
      */
    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData);
    // Aquí puedes usar values para enviar la información
    
  }
  return (
    <>
      <div className="container my-5">
        <div className="card">
          <div className="card-header ">
            <h5 className="card-title fw-bold fs-3">Inicio Sesion</h5>
          </div>
          <div className="card-body"></div>
          <form className="row mb-3" onSubmit={handleSubmit} ref={formRef}>
            <div>
            <label className="col-md-6 col-form-label px-5" htmlFor="email">
              Correo
            </label>
            <div class="col-md-12 px-5">
              <input
                className="form-control"
                placeholder="juanito@example.cl"
                id="email"
                name="email"
                type="email"
              />
            </div>
            </div>
            <div className="pb-5">
            <label className="col-md-6 col-form-label px-5" htmlFor="password">
              Contraseña
            </label>
            <div class="col-md-12 px-5">
              <input className="form-control" id="password" name="password" type="password" />
            </div>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button type="submit" className="btn btn-success  btn-md">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
