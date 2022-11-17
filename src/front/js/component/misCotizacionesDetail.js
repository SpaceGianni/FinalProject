import React, { useContext } from "react";
import "../../../front/styles/order.css";
import { Context } from "../store/appContext";

export const MisCotizacionesDetail = (item, index) => {
  const { store } = useContext(Context);
  let apellido = store.misCotizaciones.apellido;
  let nombre = store.misCotizaciones.nombre;
  let email = store.misCotizaciones.email;
  //let articulo = store.misCotizaciones.articulo_id;
  let articulo = store.misCotizaciones.cotizaciones[0].articulo_id.nombre;
  console.log(articulo);

  return (
    <div className="list-group" key={index}>
      <a
        href="#"
        className="list-group-item list-group-item-action active"
        aria-current="true"
      >
        <div className="d-flex w-100 justify-content-between">
          <h4 className="mb-1">{item.item.articulo_id?.nombre}</h4>
          <small id="numero_cotizacion">nº cotización: {item.item?.id}</small>
        </div>
        <p className="mb-1">Datos del cliente</p>
        <small>
          Nombre y Apellido: {nombre} {apellido}
        </small>
        <br />
        <small>Teléfono de contacto: {item.item?.telefono}</small>
        <br />
        <small>Dirección de referencia: {item.item?.direccion} </small>
        <br />
        <small>Email: {email} </small>
      </a>
    </div>
  );
};
