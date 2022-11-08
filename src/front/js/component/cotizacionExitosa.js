import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cotizacion_exitosa.css";

export function CotizaciónExitosa() {
  const { store } = useContext(Context);
  return (
    <>
      <div className="container">
        <h1>¡Tu cotización ha sido enviada exitosamente!</h1>
        <h2>
          El proveedor se contactará contigo dentro de los próximos 3 días
          hábiles.
        </h2>
        <h3>Detalle de tu cotización: </h3>
        <p>
          Tu nombre:{" "}
          {`${store.user?.usuario?.nombre} ${store.user?.usuario?.apellido}`}{" "}
          <br />
          Producto cotizado : {store.detail?.nombre} <br />
          Precio por Kg: {store.detail?.precio} <br />
          Dirección: {JSON.parse(sessionStorage.getItem("direccion"))}
          <br />
          Teléfono de contacto :{JSON.parse(sessionStorage.getItem("telefono"))}
          <br />
          Comentarios : {JSON.parse(sessionStorage.getItem("comentarios"))}
          <br />
        </p>
      </div>
    </>
  );
}
