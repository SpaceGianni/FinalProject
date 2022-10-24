import React, { useEffect, useState, useContext } from "react";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {

  const [pageNumbers, setPageNumbers] = useState([]);
  
  // cantidad de botones del paginador
  const fillPagesNumbers = () => {
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      setPageNumbers((prevPageNumbers) => prevPageNumbers.concat(i));
    }
  };

/*   useEffect(() => {
    fillPagesNumbers();
  }, []); */

  useEffect(() => {
    fillPagesNumbers();
  }, [postPerPage, totalPosts]);
//Arregalr el hecho de la renderizacion a cada rato del paginador
  return (
    <>
      <div className="col-md-12">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center mt-5">
            {/* number es el evento del paginador */}
            {pageNumbers.length > 0 &&
              pageNumbers.map((number) => {
                return (
                  <li key={number} className="page-item">
                    <button onClick={()=>{paginate(number)}} className="page-link">
                      {number}
                    </button>
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
      
    </>
  );
};

export default Pagination;

