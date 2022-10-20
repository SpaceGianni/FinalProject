import React, { useState, useEffect } from "react";
import Filter from "./filter";
import Card from "./subComponent/Card";
import Pagination from "./subComponent/pagination";


const CardList = () => {
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    //getUsers();
    getDataTest();
  }, []);

  const getDataTest = () => {
    let url = "https://jsonplaceholder.typicode.com/photos";
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

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-2">
            <Filter />
          </div>
          <div className="col-md-10">
            <div className="row">

            {!!gallery &&
              gallery.map((image, index) => {
                return <Card key={index} image={image} />;
              })} 

              </div>
          </div>
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default CardList;
