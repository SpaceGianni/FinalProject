import React, { useContext } from "react";
import { Link } from "react-router-dom";
import imagenFinal from "../../img/Logo_proyecto_final.png";
import { Context } from "../store/appContext";
//import Dropdown from "./dropdown_btn";

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

          <div className="dropdown">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mis Pedidos
            </button>
            <ul className="dropdown-menu">
              {!!store.pedidos &&
                store.pedidos.length > 0 &&
                store.pedidos.map(({ name }, index) => {
                  return <Dropdown name={name} key={index} />;
                })}
            </ul>
          </div>
          <div id="navbarlink" className="nav-link text-white">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
