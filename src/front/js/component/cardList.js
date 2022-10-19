import React from "react";
import Filter from "./filter";
import Card from "./subComponent/Card";
import Pagination from "./subComponent/pagination";

const CardList = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <Filter />
          <Card />
        </div>
      <Pagination />
      </div>
    </>
  
  );
};

export default CardList;
