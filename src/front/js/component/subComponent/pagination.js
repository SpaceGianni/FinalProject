import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {

  const { store, actions } = useContext(Context);

  const [pageNumbers, setPageNumbers] = useState([]);
  const fillPagesNumbers = () => {
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      setPageNumbers((prevPageNumbers) => prevPageNumbers.concat(i));
    }
  };
  useEffect(() => {
    fillPagesNumbers();
  }, []);
  useEffect(() => {
    fillPagesNumbers();
  }, [postPerPage, totalPosts]);

  return (
    <>
      <div className="col-md-12">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center mt-5">
            {/* e_number es el evento del paginador */}
            {pageNumbers.length > 0 &&
              pageNumbers.map((e_number) => {
                return (
                  <li key={e_number} className="page-item">
                    <button onClick={()=>{paginate(e_number)}} className="page-link">
                      {e_number}
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

