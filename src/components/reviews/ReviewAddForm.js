import React, { Component } from 'react';
import ReviewManager from '../../modules/ReviewManager';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Rating from "react-rating";

const userObj = sessionStorage.getItem("credentials")
class ReviewAddForm extends Component {
    state = {
        name: "",
        date: "",
        description: "",
        rating: "",
        photo: "",
        recommendation: null,
        userId: "",
        unitId: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    // react-rating function and fetch call
    setCondition = evt => {
        let reviews = {
            rating: evt
        };
        ReviewManager.patch(
            "reviews",
            reviews,
            this.state.rating.id,
        ).then(response => response);
    };

    /* Local method for validation, set loadingStatus, create object, invoke the Manager post method, and redirect to the full list
    */
    createNewReview = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.date === "" || this.state.description === "" || this.state.rating === "" || this.state.recommendation === "") {
            window.alert("Please fill out all fields.");
        } else {
            this.setState({ loadingStatus: true });
            const review = {
                name: this.state.name,
                date: this.state.date,
                description: this.state.description,
                rating: this.state.rating,
                recommendation: this.state.recommendation,
                userId: parseInt(this.props.user),
                unitId: parseInt(this.props.unit)
            };
            console.log("brand new review obj", this.props.user)

            // Create the review and redirect user to review list
            ReviewManager.post(review)
            .then(() => this.props.history.push(`/reviews/${this.props.unit.id}`));
        }
    };

    render(){

        return(
            <>
            <div className="form-group">
            <Form>
                <fieldset>
                    <div className="formgrid">
                    <h3>Add a Review</h3>
                        <Input
                            className="form-control"
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Summarize your experience"
                        />
                        <legend>Rate your experience</legend>
                        <Rating
                            id="condition"
                            initialRating={this.state.rating}
                            onClick={evt => this.setCondition(evt)}
                        />
                        <legend>Enter today's date</legend>
                        <div className="review-date">
                            <Input
                                className="form-control"
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="date"
                                placeholder="Enter today's date"
                            />
                        </div>
                        <div className="review-description">
                            <Input
                                className="form-control"
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="description"
                                placeholder="Describe your rental experience"
                            />
                        </div>
                        <FormGroup>
                        <legend>Add a photo</legend>
                            <Input
                                type="file"
                                name="file"
                                id="photo"
                                onChange={this.handleFieldChange}
                            />
                            <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                            </FormText>
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <legend>Would you recommend?</legend>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Yes
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                No
                            </Label>
                            </FormGroup>
                        </FormGroup>
                    </div>
                    <div className="alignRight">
                        <Button
                            className="btn btn-primary"
                            type="button"
                            onClick={this.addNewReview}>Add Review
                        </Button>
                    </div>
                </fieldset>
            </Form>
        </div>
        </>
        )
    }
}

export default ReviewAddForm