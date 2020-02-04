import React, { Component } from "react";
import UnitCard from "./UnitCard"
// import BuildingManager from "../../modules/BuildingManager";

class UnitList extends Component {

    // state = {
    //     unitResults: [],
    //     unit: ""
    // }

    render() {

        return(
            <>
            <h3>Unit List</h3>
            <UnitCard {...this.props}/>
            </>

        )
    }
}

export default UnitList;