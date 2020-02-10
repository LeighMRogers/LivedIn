import React, { Component } from "react";
import ReviewManager from "../../modules/ReviewManager";
import { Button } from 'reactstrap';

class ReviewCard extends Component {

    handleDelete = id => {
        ReviewManager.delete(id)
        .then(() => this.props.getData());
    }

    render() {
        console.log("review Id", this.props.review.id)
        return(

            <div className="card">
                <div className="card-content">
                    <h3 className="card-header">{this.props.review.name}</h3>
                    <h4>{this.props.review.rating}</h4>
                    <p>{this.props.review.description}</p>
                    <Button type="button" onClick={() => {this.props.history.push(`/reviews/edit/${this.props.review.id}`)}}>Edit</Button>
                    <Button type="button" onClick={() => this.handleDelete(this.props.review.id)}>Delete</Button>
                </div>
            </div>
        )
    }
}

export default ReviewCard;