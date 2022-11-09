import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/order.css";

export const Orders = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCotizaciones();
  }, []);

  return (
    <>
      <h1>Pedidos</h1>
      {!!store.orders &&
        store.orders.map((index) => {
          return (
            <>
              <div>
                <div className="list-group">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action active"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h4 className="mb-1">NOMBRE ARTICULO</h4>
                      <small>nº cotización: {store.orders[0]?.id}</small>
                    </div>
                    <p className="mb-1">COMENTARIOS</p>
                    <small>
                      Datos cliente: {store.orders[0]?.user_id?.nombre}
                    </small>
                    <br />
                    <small>
                      Teléfono de contacto: {store.orders[0]?.telefono}
                    </small>
                    <br />
                    <small>
                      Dirección de referencia: {store.orders[0]?.direccion}{" "}
                    </small>
                    <br />
                  </a>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};
