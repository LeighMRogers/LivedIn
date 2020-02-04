import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Login from "./auth/Login";
import Register from "./auth/Register";
import BuildingList from "./buildings/BuildingList";
import UnitList from "./units/UnitList";
import ReviewList from "./reviews/ReviewList";

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

            <Route exact path="/building/units" render={props => {
            return <UnitList  {...props} />
            }} />

            <Route exact path="/building/units/reviews" render={props => {
            return <ReviewList {...props} />
            }} />
        </React.Fragment>
      )
    }
}
