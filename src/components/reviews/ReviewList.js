import React, { Component } from "react";
import ReviewCard from "../reviews/ReviewCard";
// import BuildingManager from "../../modules/BuildingManager";

class ReviewList extends Component {

    // state = {
    //     reviewResults: [],
    //     review: ""
    // }

    render() {

        return(
            <>
            <h3>Review List</h3>
            <ReviewCard {...this.props}/>
            </>

        )
    }
}

export default ReviewList;