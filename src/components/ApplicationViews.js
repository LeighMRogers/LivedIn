import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Login from "./auth/Login";
import Register from "./auth/Register";
import BuildingList from "./buildings/BuildingList";
import UnitList from "./units/UnitList";
import ReviewList from "./reviews/ReviewList";
import ReviewAddForm from "./reviews/ReviewAddForm";

export default class ApplicationViews extends Component {

    render() {

      return (
        <React.Fragment>
            <Route exact path="/" render={(props) => {
            return <BuildingList {...props} />
            }} />

            {/* login route */}
            <Route path="/login" render={props => {
            return <Login  {...props} setUser={this.props.setUser} />
            }} />

            {/* register route */}
            <Route path="/register" render={props => {
            return <Register  {...props} getUser={this.props.getUser} setUser={this.props.setUser}/>
            }} />

            {/* this route gets specific units for each building */}
            <Route exact path="/buildings/:buildingId(\d+)" render={props => {
            return <UnitList buildingId={parseInt(props.match.params.buildingId)} {...props} />
            }} />

            {/* This route gets specific reviews for each unit/building */}
            <Route exact path="/reviews/:unitId(\d+)" render={props => {
            return <ReviewList unitId={parseInt(props.match.params.unitId)} {...props} />
            }} />

            {/* Add Review route */}
            <Route path="/reviews/new/:unitId(\d+)" render={(props) => {
            return <ReviewAddForm {...props} unitId={parseInt(props.match.params.unitId)} getUser={this.props.getUser}/>
            }} />
        </React.Fragment>
      )
    }
}

