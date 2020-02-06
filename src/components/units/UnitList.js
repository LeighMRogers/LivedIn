import React, { Component } from "react";
import UnitCard from "./UnitCard";
import BuildingManager from "../../modules/BuildingManager";

class UnitList extends Component {

    state = {
        units: [],
        building: {},
    }

    componentDidMount() {
        console.log("reviews", this.state.review)
        this.getData();
    }

    getData = () => {
        console.log(this.state.review);
      BuildingManager.getWithUnits(this.props.buildingId).then(building => {
        console.log("building", building)
        this.setState({
          units: building.units,
          building: building,
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