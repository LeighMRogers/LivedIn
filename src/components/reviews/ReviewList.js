import React, { Component } from "react";
import ReviewCard from "../reviews/ReviewCard";
import UnitManager from "../../modules/UnitManager";
import { Button } from 'reactstrap';

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
            <Button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/reviews/new")}}>
                Add a Review
            </Button>
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