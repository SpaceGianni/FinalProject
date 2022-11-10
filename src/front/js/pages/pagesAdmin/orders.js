import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/order.css";
import { OrdersClient } from "./ordersClient";

export const Orders = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCotizaciones();
  }, []);

  console.log("store orders", store.orders, "end");

  return (
    <>
      <h1>Pedidos</h1>
      {!!store.orders &&
        store.orders.map((item, index) => {
          return (
            <>
              <OrdersClient item={item} key={index} />
            </>
          );
        })}
    </>
  );
};
