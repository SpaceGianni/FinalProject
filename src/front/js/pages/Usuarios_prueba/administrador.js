import React, { useState, useEffect, useContext, Outlet } from "react";
//import { Context } from "../store/appContext";
import { Route, Routes, Link } from "react-router-dom";

export const Administrador = () => {
  //const { store, actions } = useContext(Context);

  return (
    <>
      <div className="content">
        <h1>SOY UN ADMINISTRADOR</h1>
      </div>
    </>
  );
};
