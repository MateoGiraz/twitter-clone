import React from "react";
import { Home } from "./Home";
import { Sidebar } from "./Sidebar";
import { Widgets } from "./Widgets";
import GlobalStyles from "../styles/GlobalStyles";

function MainPage() {
  return (
    <div className="MainPage">
        <Sidebar/>
        <Home/>
        <Widgets/>
        <GlobalStyles/>
    </div>
  );
}

export default MainPage;