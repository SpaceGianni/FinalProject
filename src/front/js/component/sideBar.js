import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/layout.scss";

export const SideBar = () => {
  return (
    <>
      {/* <div className='col-md-2 bg-white'>sideBar</div> */}
      <div className="sideBar">
        <ul>
          <li>
            <Link to="ProPublic">Productos publicados</Link>
          </li>
          <li>
            <Link to="Orders">Pedidos</Link>
          </li>
          <li>
            <Link to="HistoryAdmin">AHistorial</Link>
          </li>
          <li>
            <Link to="AccAdministration">Administrar cuentas</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
