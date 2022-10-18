import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Bppal from "../component/bPpal";
import Filter from "../component/filter";
import CardList from "../component/cardList";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
  return (
    <div className="pageHome">
      <Bppal />
      <Filter />
      <CardList />   
    </div>
  );
};
