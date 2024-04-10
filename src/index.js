import React from "react";
import ReactDOM from "react-dom/client";
import { NavBar } from "./components/nav/NavBar";
import Images from "./components/images/Images";
import Menu from "./components/menu/Menu";
import "./styles.css";

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <NavBar></NavBar>
    <Images></Images>
  </>
);
