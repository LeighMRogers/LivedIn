import React, { Component } from "react";
// import BuildingManager from "../../modules/BuildingManager";

class UnitCard extends Component {

    // state = {
    //     unitResults: [],
    //     unit: ""
    // }

    render() {

        return(

            <div className="card">
                <div className="card-content">
                    <h3 className="card-header">Unit Card</h3>
                    <button type="button" 
                            className="btn btn-primary"
                            onClick={() => {this.props.history.push("/building/units/reviews")}}>See Reviews
                    </button>
                </div>
            </div>
        )
    }
}

export default UnitCard;