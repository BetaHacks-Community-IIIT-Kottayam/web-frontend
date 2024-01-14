import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "./Footer";

const Layout=()=>{
    return <div className="font-global">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
};


export default Layout;