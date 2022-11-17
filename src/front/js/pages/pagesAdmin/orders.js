import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/order.css";
import { OrdersClient } from "./ordersClient";

export const Orders = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCotizaciones();
  }, []);

  let array = [...store.orders];
  let newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    let item = array[i];
    newArray.push(item);
  }

  console.log("NewArray", newArray);

  return (
    <>
      <h1>Pedidos</h1>
      {!!newArray &&
        newArray.map((item, index) => {
          return (
            <>
              <OrdersClient item={item} key={index} />
            </>
          );
        })}
    </>
  );
};
