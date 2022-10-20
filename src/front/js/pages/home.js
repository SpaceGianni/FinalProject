import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Filter from "../component/filter";
import CardList from "../component/cardList";
import "../../styles/home.css";
import { Banner } from "../component/banner";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="pageHome">
      <Banner />
      <CardList />
    </div>
  );
};
