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
            <h3>Unit List</h3>
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