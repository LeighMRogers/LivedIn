import React, { Component } from "react";

class BuildingCard extends Component {

    state = {
        building: {}
    }

    render() {

        return(

            <div className="card">
                <div className="card-content">
                    <div className="building-photo">
                        <img src={`/images/${this.props.building.photo}`}></img>
                    </div>
                    <div className="card-text">
                        <h3>{this.props.building.name}</h3>
                        <p>{this.props.building.address}</p>
                        <div className="card-button">
                            <button type="button"
                                className="btn btn-primary"
                                onClick={() => {this.props.history.push(`/buildings/${this.props.building.id}`)}}>
                                See Units
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildingCard;