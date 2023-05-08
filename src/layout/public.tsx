import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "../components";

export default function PublicLayout(): JSX.Element {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <div style={{ background: "#f8f8f8" }}>
        <Outlet />
      </div>
        <Footer />
    </>
  );
}
