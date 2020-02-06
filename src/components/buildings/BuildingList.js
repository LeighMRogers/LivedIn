import React, { Component} from "react";
import BuildingManager from "../../modules/BuildingManager";
import BuildingCard from "./BuildingCard";
import Mapper from "../map/Map"

class BuildingList extends Component {

    state = {
      // buildingResults: [],
      buildings: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
      BuildingManager.getAll().then(buildings => {
        this.setState({
          buildings: buildings
        });
      });
    };

    render() {
      return(
        <>
        <h1>Building List</h1>
        <div className="mapWrapper">
            <Mapper
              props={this.state.buildings}
            />
        </div>
        {this.state.buildings.map(building => (
          <BuildingCard
            key={building.id}
            buildingId={building.id}
            building={building}
            {...this.props}
            getData={this.getData}/>
        ))}
        </>
      )

    }
}

export default BuildingList;