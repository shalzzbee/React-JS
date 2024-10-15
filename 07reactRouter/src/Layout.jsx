import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            {/* nesting ki jaa skti hai with the help of react-router-dom */}
            <Footer />
        </>
    )
}

export default Layout;