import React, { useState, useEffect, useContext, Outlet } from "react";
import { Context } from "../store/appContext";
import { Route, Routes, Link } from "react-router-dom";
import { AccAdministration } from "./pagesAdmin/accAdministration";
import { HistoryAdmin } from "./pagesAdmin/historyAdmin";
import { HistoryClient } from "./pagesAdmin/historyClient";
import { MyShopping } from "./pagesAdmin/myShopping";
import { Orders } from "./pagesAdmin/orders";
import { Profile } from "./pagesAdmin/profile";
import { ProPublic } from "./pagesAdmin/proPublic";
import { SideBar } from "../component/sideBar";
import { FormProducto } from "./pagesAdmin/formProducto";

export const Admin = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
        <div className="d-flex">
          <SideBar />
          <div className="content">
          <Routes>
          <Route element={<ProPublic />} exact={true} path="ProPublic" />
          <Route element={<HistoryAdmin />} exact={true} path="HistoryAdmin" />
          <Route element={<Orders />} exact={true} path="Orders" />
          <Route element={<AccAdministration />} exact={true} path="AccAdministration" />
          <Route element={<FormProducto />} exact={true} path="FormProducto" />
          </Routes>
          </div>
        </div>

        {/*        <Routes>
         <Route element={<AccAdministration />} path="AccAdministration" />
        <Route element={<HistoryAdmin />} path="HistoryAdmin" />
        <Route element={<HistoryClient />} path="HistoryClient" />
        <Route element={<MyShopping />} path="MyShopping" />
        <Route element={<Orders />} path="Orders" />
        <Route element={<Profile />} path="Profile" />
        <Route element={<ProPublic />} path="ProPublic" />
        <Route element={<h1>Not found!</h1>} /> 
        </Routes>*/}
      
    </>
  );
};
