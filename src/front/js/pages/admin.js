import React, { useState, useEffect, useContext, Outlet } from "react";
import { Context } from "../store/appContext";
import { Route, Routes, Link } from "react-router-dom";
import { AccAdministration } from "./pagesAdmin/accAdministration";
import { HistoryAdmin } from "./pagesAdmin/historyAdmin";
import { HistoryClient } from "./pagesAdmin/historyClient";
import { Orders } from "./pagesAdmin/orders";
import { Profile } from "./pagesAdmin/profile";
import { ProPublic } from "./pagesAdmin/proPublic";
import { SideBar } from "../component/sideBar";
import { FormProducto } from "./pagesAdmin/formProducto";
import { MyShopping } from "../component/myShopping";
import { MisCotizaciones } from "../component/misCotizaciones";

export const Admin = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="content">
        <Routes>
          <Route element={<ProPublic />} exact={true} path="ProPublic" />
          <Route element={<HistoryAdmin />} exact={true} path="HistoryAdmin" />
          <Route element={<Orders />} exact={true} path="orders" />
          <Route
            element={<AccAdministration />}
            exact={true}
            path="AccAdministration"
          />
          <Route element={<FormProducto />} exact={true} path="FormProducto" />
          <Route element={<MyShopping />} exact={true} path="myShopping" />
          <Route
            element={<MisCotizaciones />}
            exact={true}
            path="misCotizaciones"
          />
        </Routes>
      </div>
    </>
  );
};
