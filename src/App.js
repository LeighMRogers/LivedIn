import React, { Component } from "react";
import ApplicationViews from "../src/components/ApplicationViews";
import NavBar from "./components/nav/NavBar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import './App.css';
import Mapper from "./components/map/Map"

function App() {

  const mapArray = [
    {
      id: 1,
      name: "Nashville",
      lat: 36.170081,
      lng: -86.787324
    },
    {
      id: 2,
      name: "South Nashville",
      lat: 36.137647,
      lng: -86.733079
    }
  ]

  return (
    <>

    <div className="App">
      <NavBar/>
      <ApplicationViews/>
    </div>
    </>
  );
}

export default App;
