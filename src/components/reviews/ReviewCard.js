import React, { Component } from "react";
import ReviewManager from "../../modules/ReviewManager";
import { Button } from 'reactstrap';

class ReviewCard extends Component {

    handleDelete = id => {
        ReviewManager.delete(id)
        .then(() => this.props.getData());
    }

    render() {
        return(
            <div id="review-card">
                <div id="review-card-content">
                    <div id="review-card-top">
                        <h3>{this.props.review.title}</h3>
                        <h4>{this.props.review.rating} stars</h4>
                    </div>
                    <p className="review-description">{this.props.review.description}</p>
                    <div id="review-card-bottom">
                        <p>{this.props.review.date}</p>
                        <div className="review-card-buttons">
                            <Button type="button" onClick={() => {this.props.history.push(`/reviews/edit/${this.props.review.id}`)}}>Edit</Button>
                            <Button type="button" onClick={() => this.handleDelete(this.props.review.id)}>Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewCard;