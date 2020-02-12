import React, { Component } from "react";
import UnitManager from "../../modules/UnitManager";

class UnitCard extends Component {

    state = {
        units: {},
        reviews: [],
        averageRating: ""
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
      UnitManager.getWithReviews(this.props.unitId).then(units => {
        this.setState({
          reviews: units.reviews,
          units: units,
        }, this.calculateRating);
      });
    };

    getRating = (review) => {
        return review.rating;
    }

    addRatings= (runningTotal, rating) =>  {
        return runningTotal + rating;
    }

    calculateRating = () => {
        if (this.state.reviews.length > 0) {
            let ratingArray = this.state.reviews.map(this.getRating);
            let ratingTotal = ratingArray.reduce(this.addRatings, 0);
            // Calculate the average and display.
            let averageRating = ratingTotal / ratingArray.length;
            console.log("rating average", averageRating);
            this.setState({
                averageRating: averageRating.toFixed(1)
            })
        }
    }

    render() {
        return(
            <div className="card">
                <div className="card-content">
                    <div className="unitCard-h3">
                        <h3>{this.props.unit.name}</h3>
                    </div>
                    <div className="unitCard-rating">
                        <h4>Rating: {this.state.averageRating}</h4>
                    </div>
                    <div className="unitCard-button">
                        <button type="button"
                                className="btn btn-primary"
                                onClick={() => {this.props.history.push(`/reviews/${this.props.unit.id}`)}}>See Reviews
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UnitCard;