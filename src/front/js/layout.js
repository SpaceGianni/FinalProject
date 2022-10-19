import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Admin } from "./pages/admin";
import { ProDetail } from "./pages/proDetail";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { AccAdministration } from "./pages/pagesAdmin/accAdministration";
import { HistoryAdmin } from "./pages/pagesAdmin/historyAdmin";
import { HistoryClient } from "./pages/pagesAdmin/historyClient";
import { MyShopping } from "./pages/pagesAdmin/myShopping";
import { Orders } from "./pages/pagesAdmin/orders";
import { Profile } from "./pages/pagesAdmin/profile";
import { ProPublic } from "./pages/pagesAdmin/proPublic";
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Admin />} path="/admin" />
                        <Route element={<ProDetail />} path="/ProDetail" />

                        <Route element={<AccAdministration />} path="/AccAdministration" />
                        <Route element={<HistoryAdmin />} path="/HistoryAdmin" />
                        <Route element={<HistoryClient />} path="/HistoryClient" />
                        <Route element={<MyShopping />} path="/MyShopping" />
                        <Route element={<Orders />} path="/Orders" />
                        <Route element={<Profile />} path="/Profile" />
                        <Route element={<ProPublic />} path="/ProPublic" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
