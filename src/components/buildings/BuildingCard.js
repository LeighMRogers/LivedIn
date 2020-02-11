import React, { Component } from "react";

class BuildingCard extends Component {

    state = {
        building: {}
    }

    render() {

        return(

            <div className="card">
                <div className="card-content">
                <h3 className="card-header">{this.props.building.name}</h3>
                <img src={`/images/${this.props.building.photo}`}></img>
                <p>{this.props.building.address}</p>
                <button type="button"
                    className="btn btn-primary"
                    onClick={() => {this.props.history.push(`/buildings/${this.props.building.id}`)}}>
                    See Units</button>
                </div>
            </div>
        )
    }
}

export default BuildingCard;