import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Admin } from "./pages/admin";
import { ProDetail } from "./pages/proDetail";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import { Login } from "./pages/login";
import "../styles/layout.scss";
import { Register } from "./pages/register";
import ConfirmPassword from "./component/testFromRegister";
import NewNavbar from "./component/newNavbar";
import { CotizaciónExitosa } from "./component/cotizacionExitosa";
import MyOrders from "./pages/MyOrders";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          {/* <Navbar />  */}
          <NewNavbar />
          <Routes>
            ConfirmPassword
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<ConfirmPassword />} path="/register2" />
            <Route element={<ProDetail />} path="/ProDetail/:id" />
            <Route element={<MyOrders />} path="/MyOrders/:id" />
            <Route element={<Admin />} path="/admin/*" />
            <Route element={<CotizaciónExitosa />} path="/cotizacion_exitosa" />
            <Route element={<h1>En Mantenimiento</h1>} path="/*" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
