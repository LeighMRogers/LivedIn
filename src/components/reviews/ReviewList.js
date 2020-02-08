import React, { Component } from "react";
import ReviewCard from "../reviews/ReviewCard";
import UnitManager from "../../modules/UnitManager";
import { Button } from 'reactstrap';
import ReviewManager from "../../modules/ReviewManager"

class ReviewList extends Component {

    state = {
        reviews: []
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
          reviews: unit.reviews
        });
      });
    };

    render() {

        return(
            <>
            <h3>Review List</h3>
            <Button
                type="button"
                className="btn btn-primary"
                onClick={() => {this.props.history.push(`/reviews/new/${this.props.unitId}`)}}>
                Add a Review
            </Button>
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