import React, { Component } from "react";
import ReviewCard from "../reviews/ReviewCard";
import UnitManager from "../../modules/UnitManager";

class ReviewList extends Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
      UnitManager.getWithReviews(this.props.unitId).then(unit => {
        this.setState({
          reviews: unit.reviews
        });
      });
    };

    render() {

        return(
            <>
            <h3>Review List</h3>
            {this.state.reviews.map(review => (
                <ReviewCard
                    key={review.id}
                    review={review}
                    {...this.props}
                    getData={this.getData}/>
            ))}
            </>

        )
    }
}

export default ReviewList;