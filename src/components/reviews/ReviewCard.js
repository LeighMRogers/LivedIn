import React, { Component } from "react";

class ReviewCard extends Component {

    render() {

        return(

            <div className="card">
                <div className="card-content">
                    <h3 className="card-header">{this.props.review.name}</h3>
                    <h4>{this.props.review.rating}</h4>
                    <p>{this.props.review.description}</p>
                </div>
            </div>
        )
    }
}

export default ReviewCard;