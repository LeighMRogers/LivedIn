import React, { Component } from "react";
import UnitCard from "./UnitCard";
import BuildingManager from "../../modules/BuildingManager";

class UnitList extends Component {

    state = {
        units: [],
        building: {},
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
      BuildingManager.getWithUnits(this.props.buildingId).then(building => {
        this.setState({
          units: building.units,
          building: building
        });
      });
    };

    render() {
        return(
            <>
            <div className="list-header">
                <img className="unit-photo" src={`/images/${this.state.building.photo}`}></img>
                <h3>{this.state.building.name}</h3>
            </div>
            {this.state.units.map(unit => (
                <UnitCard
                    key={unit.id}
                    unitId={unit.id}
                    unit={unit}
                    {...this.props}
                    getData={this.getData}
                    building={this.state.building}
                />
            ))}
            </>

        )
    }
}

export default UnitList;