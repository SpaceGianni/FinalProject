import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Admin = () => {
    const { store, actions } = useContext(Context);
  return (
    <div>admin</div>
  )
}

