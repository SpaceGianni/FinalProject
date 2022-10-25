import React, { useContext } from "react";
import { Link } from "react-router-dom";
import imagenFinal from "../../img/Logo_proyecto_final.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-color text-light sticky-top">
      <div className="container">
        <img id="navbarImagen" src={imagenFinal} />
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="Busqueda"
            placeholder="Busqueda"
            aria-label="Busqueda"
          ></input>
          <button className="btn btn-outline-dark" type="submit">
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
              <div className="nav-link text-black">Iniciar Sesion</div>
            </Link>
          )}

          <Link to="/">
            <div className="nav-link text-black" href="#">
              Mis compras
            </div>
          </Link>
          <div className="nav-link text-black">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
