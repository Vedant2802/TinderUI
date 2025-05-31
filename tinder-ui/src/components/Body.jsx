import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

export const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
