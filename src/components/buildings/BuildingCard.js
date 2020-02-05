import React, { Component } from "react";
import BuildingManager from "../../modules/BuildingManager";

class BuildingCard extends Component {

    state = {
        building: ""
    }

    render() {
        console.log("building name", this.props.building.name)

        return(

            <div className="card">
                <div className="card-content">
                <h3 className="card-header">{this.props.building.name}</h3>
                <button type="button"
                    className="btn btn-primary"
                    onClick={() => {this.props.history.push("/building/units")}}>
                    See Details</button>
                </div>
            </div>
        )
    }
}

export default BuildingCard;