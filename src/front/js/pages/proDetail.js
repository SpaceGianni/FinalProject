import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import YouMightLike from "../component/youMightLike";
import { Context } from "../store/appContext";


export const ProDetail = () => {
  const { id} = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDetailById(`
    https://3001-cgabrielp-finalproject-1d1dl3rvhs2.ws-us74.gitpod.io/api/articulo/${id}`);
  }, []);
  
  useEffect(() => {
    actions.getDetailById(`
    https://3001-cgabrielp-finalproject-1d1dl3rvhs2.ws-us74.gitpod.io/api/articulo/${id}`);
  }, [id]);


  return (
    <div className="proDetail">
      <section>
        <div className="container mt-5">
          <div className="row row-sm">
            <div className="col-md-6">
              <img
                className="my_img"
                src={store.detail?.imagen} 
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="_product-detail-content">
                <p className="_p-name"> {store.detail?.nombre} </p>
                <div className="_p-price-box">
                  <div className="p-list">
                    <span className="price"> CLP. {store.detail?.precio}  x Kg </span>
                  </div>
                  <div className="_p-add-cart">
                    <div className="_p-qty">
                      <span>Cantidad de kilos</span>
                      <div
                        className="value-button decrease_"
                        id=""
                        value="Decrease Value"
                      >
                        -
                      </div>
                      <input type="number" name="qty" id="number" value="1" />
                      <div
                        className="value-button increase_"
                        id=""
                        value="Increase Value"
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className="_p-features">
                    <span> Descripcion: </span>
                    {store.detail?.descripcion} 
                  </div>
                  <form action="" method="post" acceptCharset="utf-8">
                    <ul className="spe_ul"></ul>
                    <div className="_p-qty-and-cart">
                      <div className="_p-add-cart">
                        <Link to='/admin/MyShopping'>
                        <button className="btn-theme btn buy-btn" tabIndex="0" >
                          <i className="fa fa-shopping-cart"></i> Cotizar
                        </button>
                        </Link>
                        <button
                          className="btn-theme btn btn-success"
                          tabIndex="0"
                        >
                          <i className="fa fa-shopping-cart"></i> Mis Pedidos
                        </button>
                        <input type="hidden" name="pid" value="18" />
                        <input type="hidden" name="price" value="850" />
                        <input type="hidden" name="url" value="" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     {/*  <section className="sec bg-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 title_bx">
              <h3 className="title"> Recent Post </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 list-slider mt-4">
              <div
                className="owl-carousel common_wd  owl-theme"
                id="recent_post"
              >
                <div className="item">
                  <div className="sq_box shadow">
                    <div className="pdis_img">
                      <span className="wishlist">
                        <a
                          alt="Add to Wish List"
                          title="Add to Wish List"
                          href="javascript:void(0);"
                        >
                          {" "}
                          <i className="fa fa-heart"></i>
                        </a>
                      </span>
                      <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                      </a>
                    </div>
                    <h4 className="mb-1">
                      {" "}
                      <a href="details.php"> Milton Bottle </a>{" "}
                    </h4>
                    <div className="price-box mb-2">
                      <span className="price">
                        {" "}
                        Price <i className="fa fa-inr"></i> 200{" "}
                      </span>
                      <span className="offer-price">
                        {" "}
                        Offer Price <i className="fa fa-inr"></i> 120{" "}
                      </span>
                    </div>
                    <div className="btn-box text-center">
                      <a className="btn btn-sm" href="javascript:void(0);">
                        {" "}
                        <i className="fa fa-shopping-cart"></i> Add to Cart{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="sq_box shadow">
                    <div className="pdis_img">
                      <span className="wishlist">
                        <a
                          alt="Add to Wish List"
                          title="Add to Wish List"
                          href="javascript:void(0);"
                        >
                          {" "}
                          <i className="fa fa-heart"></i>
                        </a>
                      </span>
                      <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                      </a>
                    </div>
                    <h4 className="mb-1">
                      {" "}
                      <a href="details.php"> Milton Bottle </a>{" "}
                    </h4>
                    <div className="price-box mb-2">
                      <span className="price">
                        {" "}
                        Price <i className="fa fa-inr"></i> 200{" "}
                      </span>
                      <span className="offer-price">
                        {" "}
                        Offer Price <i className="fa fa-inr"></i> 120{" "}
                      </span>
                    </div>
                    <div className="btn-box text-center">
                      <a className="btn btn-sm" href="javascript:void(0);">
                        {" "}
                        <i className="fa fa-shopping-cart"></i> Add to Cart{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="sq_box shadow">
                    <div className="pdis_img">
                      <span className="wishlist">
                        <a
                          alt="Add to Wish List"
                          title="Add to Wish List"
                          href="javascript:void(0);"
                        >
                          {" "}
                          <i className="fa fa-heart"></i>
                        </a>
                      </span>
                      <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                      </a>
                    </div>
                    <h4 className="mb-1">
                      {" "}
                      <a href="#"> Milton Bottle </a>{" "}
                    </h4>
                    <div className="price-box mb-2">
                      <span className="price">
                        {" "}
                        Price <i className="fa fa-inr"></i> 200{" "}
                      </span>
                      <span className="offer-price">
                        {" "}
                        Offer Price <i className="fa fa-inr"></i> 120{" "}
                      </span>
                    </div>
                    <div className="btn-box text-center">
                      <a className="btn btn-sm" href="javascript:void(0);">
                        {" "}
                        <i className="fa fa-shopping-cart"></i> Add to Cart{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="sq_box shadow">
                    <div className="pdis_img">
                      <span className="wishlist">
                        <a
                          alt="Add to Wish List"
                          title="Add to Wish List"
                          href="javascript:void(0);"
                        >
                          {" "}
                          <i className="fa fa-heart"></i>
                        </a>
                      </span>
                      <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                      </a>
                    </div>
                    <h4 className="mb-1">
                      {" "}
                      <a href="#"> Milton Bottle </a>{" "}
                    </h4>
                    <div className="price-box mb-2">
                      <span className="price">
                        {" "}
                        Price <i className="fa fa-inr"></i> 200{" "}
                      </span>
                      <span className="offer-price">
                        {" "}
                        Offer Price <i className="fa fa-inr"></i> 120{" "}
                      </span>
                    </div>
                    <div className="btn-box text-center">
                      <a className="btn btn-sm" href="javascript:void(0);">
                        {" "}
                        <i className="fa fa-shopping-cart"></i> Add to Cart{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="sq_box shadow">
                    <div className="pdis_img">
                      <span className="wishlist">
                        <a
                          alt="Add to Wish List"
                          title="Add to Wish List"
                          href="javascript:void(0);"
                        >
                          {" "}
                          <i className="fa fa-heart"></i>
                        </a>
                      </span>
                      <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                      </a>
                    </div>
                    <h4 className="mb-1">
                      {" "}
                      <a href="details.php"> Milton Bottle </a>{" "}
                    </h4>
                    <div className="price-box mb-2">
                      <span className="price">
                        {" "}
                        Price <i className="fa fa-inr"></i> 200{" "}
                      </span>
                      <span className="offer-price">
                        {" "}
                        Offer Price <i className="fa fa-inr"></i> 120{" "}
                      </span>
                    </div>
                    <div className="btn-box text-center">
                      <a className="btn btn-sm" href="javascript:void(0);">
                        {" "}
                        <i className="fa fa-shopping-cart"></i> Add to Cart{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="sq_box shadow">
                    <div className="pdis_img">
                      <span className="wishlist">
                        <a
                          alt="Add to Wish List"
                          title="Add to Wish List"
                          href="javascript:void(0);"
                        >
                          {" "}
                          <i className="fa fa-heart"></i>
                        </a>
                      </span>
                      <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                      </a>
                    </div>
                    <h4 className="mb-1">
                      {" "}
                      <a href="details.php"> Milton Bottle </a>{" "}
                    </h4>
                    <div className="price-box mb-2">
                      <span className="price">
                        {" "}
                        Price <i className="fa fa-inr"></i> 200{" "}
                      </span>
                      <span className="offer-price">
                        {" "}
                        Offer Price <i className="fa fa-inr"></i> 120{" "}
                      </span>
                    </div>
                    <div className="btn-box text-center">
                      <a className="btn btn-sm" href="javascript:void(0);">
                        {" "}
                        <i className="fa fa-shopping-cart"></i> Add to Cart{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="sq_box shadow">
                    <div className="pdis_img">
                      <span className="wishlist">
                        <a
                          alt="Add to Wish List"
                          title="Add to Wish List"
                          href="javascript:void(0);"
                        >
                          {" "}
                          <i className="fa fa-heart"></i>
                        </a>
                      </span>
                      <a href="#">
                        <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/resize/680x/" />
                      </a>
                    </div>
                    <h4 className="mb-1">
                      {" "}
                      <a href="details.php"> Milton Bottle </a>{" "}
                    </h4>
                    <div className="price-box mb-2">
                      <span className="price">
                        {" "}
                        Price <i className="fa fa-inr"></i> 200{" "}
                      </span>
                      <span className="offer-price">
                        {" "}
                        Offer Price <i className="fa fa-inr"></i> 120{" "}
                      </span>
                    </div>
                    <div className="btn-box text-center">
                      <a className="btn btn-sm" href="javascript:void(0);">
                        {" "}
                        <i className="fa fa-shopping-cart"></i> Add to Cart{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <YouMightLike />
    </div>
  );
};
