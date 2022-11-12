import React, { useContext, useEffect } from "react";
import { Context } from "../../js/store/appContext";
import "../../../front/styles/order.css";
import { MisCotizacionesDetail } from "./misCotizacionesDetail";

export const MisCotizaciones = () => {
  const { store, actions } = useContext(Context);

  let user = JSON.parse(sessionStorage.getItem("user"));
  let id = user.usuario.id;
  //console.log(id);

  useEffect(() => {
    actions.misCotizaciones(id);
  }, []);

  let misCotizaciones = store.misCotizaciones.cotizaciones;
  //console.log(misCotizaciones);

  return (
    <>
      <h1>Mis Cotizaciones</h1>
      {!!misCotizaciones &&
        misCotizaciones.map((item, index) => {
          return (
            <>
              <MisCotizacionesDetail item={item} key={index} />
            </>
          );
        })}
    </>
  );
};
