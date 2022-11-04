import React, { useState, useContext, useEffect } from "react";
import Filter from "../../component/filter";
import OrderBy from "../../component/orderBy";
import Pagination from "../../component/subComponent/pagination";
import { Context } from "../../store/appContext";
import Card from "../../component/subComponent/Card";

export const Cliente = () => {
  const { store, actions } = useContext(Context);

  const imagenes = store.imagenes;
  console.log("el store está con imagenes", imagenes);

  return (
    <>
      <h1>{store.imagenes.mapnombre}</h1>
    </>
  );
};
