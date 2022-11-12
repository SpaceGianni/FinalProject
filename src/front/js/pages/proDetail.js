import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import YouMightLike from "../component/youMightLike";
import { Context } from "../store/appContext";

export const ProDetail = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  let articulo = store.detail?.nombre;
  let articulo_id = store.detail?.id;
  sessionStorage.setItem("articulo", JSON.stringify(articulo));
  sessionStorage.setItem("articulo_id", JSON.stringify(articulo_id));
  useEffect(() => {
    let BACKEND_URL =
      "https://3001-spacegianni-finalprojec-zthi63k150b.ws-us75.gitpod.io";
    actions.getDetailById(BACKEND_URL + "/api/articulo/${id}");
  }, []);

  useEffect(() => {
    actions.getDetailById(BACKEND_URL + "/api/articulo/${id}");
  }, [id]);

  return (
    <div className="proDetail">
      <section>
        <div className="container mt-5">
          <div className="row row-sm">
            <div className="col-md-6">
              <img className="my_img" src={store.detail?.imagen} alt="" />
            </div>
            <div className="col-md-6">
              <div className="_product-detail-content">
                <p className="_p-name"> {store.detail?.nombre} </p>
                <div className="_p-price-box">
                  <div className="p-list">
                    <span className="price">
                      {" "}
                      $ {store.detail?.precio} x Kg{" "}
                    </span>
                  </div>
                  <div className="_p-features">
                    <span> Descripcion: </span>
                    {store.detail?.descripcion}
                  </div>
                  <form action="" method="post" acceptCharset="utf-8">
                    <ul className="spe_ul"></ul>
                    <div className="_p-qty-and-cart">
                      <div className="_p-add-cart">
                        {store.user?.usuario?.tipo === "cliente" ? (
                          <Link to="/admin/MyShopping">
                            <button
                              className="btn-theme btn buy-btn"
                              tabIndex="0"
                            >
                              <i className="fa fa-shopping-cart"></i> Cotizar
                            </button>
                          </Link>
                        ) : (
                          <Link to="/login">
                            <button
                              className="btn-theme btn buy-btn"
                              tabIndex="0"
                            >
                              <i className="fa fa-shopping-cart"></i> Cotizar
                            </button>
                          </Link>
                        )}
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
      <YouMightLike />
    </div>
  );
};
