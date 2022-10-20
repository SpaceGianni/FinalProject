import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Filter from "../component/filter";
import CardList from "../component/cardList";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
  return (
    <div className="pageHome"> 
      <CardList />   
    </div>
  );
};
