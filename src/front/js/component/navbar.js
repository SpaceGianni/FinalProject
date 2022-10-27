import React, { useContext } from "react";
import { Link } from "react-router-dom";
import imagenFinal from "../../img/Logo_proyecto_final.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-color text-light sticky-top">
      <div className="container">
        <Link to="/">
          <img id="navbarImagen" src={imagenFinal} />
        </Link>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="Busqueda"
            placeholder="Busqueda"
            aria-label="Busqueda"
          ></input>
          <button id="navbarbutton" className="btn" type="submit">
            Buscar
          </button>
        </form>

        <div className="ml-auto d-flex">
          {!!store.user ? (
            <>
              {store.user?.usuario?.nombre}
              <button className="btn btn-danger" onClick={actions.logOut}>LogOut</button>
            </>
          ) : (
            <Link to="/login">
              <div id="navbarlink" className="nav-link text-white">Iniciar Sesion</div>
            </Link>
          )}

          <Link to="/">
            <div id="navbarlink" className=" nav-link text-white" href="#">
              Mis compras
            </div>
          </Link>
          <div id="navbarlink" className="nav-link text-white">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
