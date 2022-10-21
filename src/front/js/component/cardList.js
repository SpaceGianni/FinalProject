import React, { useState, useEffect } from "react";
import Filter from "./filter";
import OrderBy from "./orderBy";
import Card from "./subComponent/Card";
import Pagination from "./subComponent/pagination";

const CardList = () => {
  const [gallery, setGallery] = useState([]);
  
  const[currentPage, setCurrentPage] = useState(1);
  const[postPerPage, setPostPerPage]= useState(24)

  useEffect(() => {
    
    getDataTest();
  }, []);

  const getDataTest = () => {
    let url = "https://jsonplaceholder.typicode.com/albums/1/photos";
    let options_get = {
      method: "GET", // GET, POST, PUT, DELETE,
      //body: "", // POST, PUT
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(url, options_get) // GET
      .then((response) => {
        // Respuesta del Servidor
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        // Datos Consultados
        console.log(data);
        setGallery(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const indexOfTheLastPost = currentPage * postPerPage;
  const indexOfTheFirstPost = indexOfTheLastPost - postPerPage;
  const currentGallery = gallery.slice(indexOfTheFirstPost, indexOfTheLastPost);


  //change page
  const paginate = pageNumber=>
    setCurrentPage(pageNumber);
  

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
              {!!currentGallery &&
                currentGallery.map((image, index) => {
                  return <Card key={index} image={image} />;
                })}
            </div>
          </div>
        </div>
        <Pagination postPerPage={postPerPage} totalPosts={gallery.length} paginate={paginate}/>
       
      </div>
    </>
  );
};

export default CardList;
