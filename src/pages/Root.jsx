import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Root = () => {
  const footerRef = useRef(null);
  return (
    <>
      <Navbar footerRef={footerRef} />
      <main>
        <Outlet />
      </main>
      <Footer footerRef={footerRef} />
    </>
  );
};

export default Root;
