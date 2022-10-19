import React, {useState} from "react";

const Filter = () => {

  const [icon, setIcon]= useState('')
  return (
    <>
      <div className="col-sm-2 ">
        <div className="row">
          <button
            className="btn border-bottom"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#filtroplegable"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <div className="d-flex">
              <div className="p-2 w-100">Filtro X</div>
              <div className="p-2 flex-shrink-1">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </button>
          <div className="collapse" id="filtroplegable">
            <div className="form-check py-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Default
              </label>
            </div>
            <div className="form-check py-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Filtro Y
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <button
            className="btn border-bottom"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#filtroplegable2"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <div className="d-flex">
              <div className="p-2 w-100">Filtro X</div>
              <div className="p-2 flex-shrink-1">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </button>
          <div className="collapse" id="filtroplegable2">
            <div className="form-check py-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label " htmlFor="flexCheckDefault">
                Default
              </label>
            </div>
            <div className="form-check py-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Filtro Y
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline-dark d-flex justify-content-center rounded-pill mt-4"
          >
            Filtrar
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;

{
  /* <div className="col-sm-2">
<div className="border-bottom fw-bold">Filter</div>
<p className="py-2">Filtro X</p>
<div className="form-check my-2 border-bottom ">

  <input
    className="form-check-input "
    type="checkbox"
    value=""
    id="defaultCheck1"
  /> 
  <label className="form-check-label " for="defaultCheck1">
    Por fecha
  </label>
  </div>
  <p className="py-2">Filtro X</p>
  <div className="form-check my-2 border-bottom ">
    <input
      className="form-check-input"
      type="checkbox"
      value=""
      id="defaultCheck2"
    />
    <label className="form-check-label" for="defaultCheck2">
      Por precio
    </label>
  </div>


<button type="button" className="btn btn-dark">
  Filtrar
</button>
</div>
*/
}
