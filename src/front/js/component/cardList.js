import React, { useState, useContext } from "react";
import Filter from "./filter";
import OrderBy from "./orderBy";
import Card from "./subComponent/Card";
import Pagination from "./subComponent/pagination";
import { Context } from "../store/appContext";

const CardList = () => {

  const { store, actions } = useContext(Context);
  
  const[currentPage, setCurrentPage] = useState(1);
  const[postPerPage, setPostPerPage]= useState(24)

  const indexOfTheLastPost = currentPage * postPerPage;
  const indexOfTheFirstPost = indexOfTheLastPost - postPerPage;
   store.results = store.gallery.slice(indexOfTheFirstPost, indexOfTheLastPost);
   //filtro para el buscador
   store.results =!store.search ? store.gallery : store.results.filter((dato)=>dato.nombre.toLowerCase().includes(store.search.toLocaleLowerCase()))

  //change page
  const paginate = pageNumber=>
    setCurrentPage(pageNumber);
  
    console.log(store.results)

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-2">
            <Filter />
          </div>
          <div className="col-md-10">
            <OrderBy setPostPerPage={setPostPerPage} />
            <div className="row">
              {!!store.results &&
                store.results.map((post, index) => {
                  return <Card key={index} post={post} cardClasses='col-md-4 py-2'/>;
                })}
            </div>
          </div>
        </div>
        <Pagination postPerPage={postPerPage} totalPosts={store.gallery.length} paginate={paginate}/>
       
      </div>
    </>
  );
};

export default CardList;
