import React, { Component } from "react";
import UnitManager from "../../modules/UnitManager"

class UnitCard extends Component {

    state = {
        units: {},
        reviews: []
    }

    componentDidMount() {
        console.log("reviews", this.state.reviews)
        this.getData();
    }

    getData = () => {
        console.log(this.state.review);
      UnitManager.getWithReviews(this.props.unitId).then(units => {
        this.setState({
          reviews: units.reviews,
          units: units,
        });
      });
    };

    getRating = (review) => {
        return review.rating;
    }

    

    render() {
        console.log(this.props.unit.id)
        return(
            <div className="card">
                <div className="card-content">
                    <h3 className="card-header">{this.props.building.name} {this.props.unit.name}</h3>
                    {/* <p>{this.state.review.rating}</p> */}
                    <button type="button"
                            className="btn btn-primary"
                            onClick={() => {this.props.history.push(`/reviews/${this.props.unit.id}`)}}>See Reviews
                    </button>
                </div>
            </div>
        )
    }
}

export default UnitCard;