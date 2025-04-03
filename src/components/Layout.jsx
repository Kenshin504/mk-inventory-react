import { useState, useEffect } from "react";
import "../styles/nav.css";
import Account from "../pages/Account";
import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

function Layout({ children }) {
  const { imageSrc, fullName } = useContext(UserContext); // Access context

  return (
    <>
      <TopBar />
      <SideBar />

      <div className="content-section fade-in">{children}</div>
    </>
  );
}

export default Layout;
