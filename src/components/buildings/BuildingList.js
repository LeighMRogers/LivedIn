import React, { Component } from "react";
// import BuildingManager from "../../modules/BuildingManager";
// import BuildingCard from "./BuildingCard";
import Mapper from "../map/Map"
import BuildingCard from "./BuildingCard";

function BuildingList() {

    // state = {
    //     buildings: []
    // }

    // componentDidMount() {
    //     this.getData();
    // }

    let mapArray = [
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

    return(
        <>
        <h1>Building List</h1>
        <div className="mapWrapper">
            <Mapper props={mapArray}/>
        </div>
        <BuildingCard/>
        </>
    )
}

export default BuildingList;