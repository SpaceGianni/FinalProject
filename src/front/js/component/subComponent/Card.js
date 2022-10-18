import React from "react";

const Card=()=> {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-3 ">
            <div className="card ">
              <div className="card-body ">
                <img src="https://picsum.photos/200/300"/>
                <h5 className="card-title fs-4"> Price</h5>
                <p className="card-text"> Name </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;