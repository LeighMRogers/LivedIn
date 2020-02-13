import React, { Component } from "react";
import ReviewCard from "../reviews/ReviewCard";
import UnitManager from "../../modules/UnitManager";
import { Button } from 'reactstrap';
import ReviewManager from "../../modules/ReviewManager"

class ReviewList extends Component {

    state = {
        reviews: [],
        building: "",
        unit: ""
    }

    deleteReview = id => {
        ReviewManager.delete(id)
        .then(() => {
          ReviewManager.getAll()
          .then((newReviews) => {
            this.setState({
                reviews: newReviews
            })
          })
        })
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
      UnitManager.getWithReviews(this.props.unitId).then(unit => {
        this.setState({
          reviews: unit.reviews,
          building: unit.building.name,
          unit: unit.name
        });
      });
    };

    render() {

        return(
            <>
            <div className="review-header">
                <h3>Reviews for {this.state.building}{" "} {this.state.unit}</h3>
                <Button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {this.props.history.push(`/reviews/new/${this.props.unitId}`)}}>
                    Add a Review
                </Button>
            </div>
            {this.state.reviews.map(review => (
                <ReviewCard
                    key={review.id}
                    review={review}
                    {...this.props}
                    getData={this.getData}
                    deleteReview={this.deleteReview}/>
            ))}
            </>

        )
    }
}

export default ReviewList;