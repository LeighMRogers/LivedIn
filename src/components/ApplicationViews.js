import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Login from "./auth/Login";
import Register from "./auth/Register";
import BuildingList from "./buildings/BuildingList";
import UnitList from "./units/UnitList"

export default class ApplicationViews extends Component {

    render() {

      return (
        <React.Fragment>
            <Route exact path="/" render={(props) => {
            return <BuildingList {...props} />
            }} />

            {/* login route */}
            <Route path="/login" render={props => {
            return <Login  {...props} />
            }} />

            {/* register route */}
            <Route path="/register" render={props => {
            return <Register  {...props} />
            }} />

            <Route path="/building/units" render={props => {
            return <UnitList  {...props} />
            }} />
        </React.Fragment>
      )
    }
}
