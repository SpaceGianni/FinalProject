import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/order.css";

export const OrdersClient = (item,index) => {
  //console.log("item", item.item, "end");
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
          Nombre y Apellido:{" "}
          {`${item.item?.user_id?.nombre} ${item.item?.user_id?.apellido}`}
        </small>
        <br />
        <small>Teléfono de contacto: {item.item?.telefono}</small>
        <br />
        <small>Dirección de referencia: {item.item?.direccion} </small>
        <br />
        <small>Email: {item.item?.user_id?.email} </small>
      </a>
    </div>
  );
};
