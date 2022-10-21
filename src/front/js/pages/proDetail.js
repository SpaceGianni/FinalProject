import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import YouMightLike from "../component/youMightLike";

import { Context } from "../store/appContext";

export const ProDetail = () => {
    const { store, actions } = useContext(Context);
  return (
    <div><YouMightLike /></div>
  )
}

