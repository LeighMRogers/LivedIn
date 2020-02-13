import React, { Component } from 'react';
import ReviewManager from '../../modules/ReviewManager';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Rating from "react-rating";

const userObj = sessionStorage.getItem("credentials")
class ReviewAddForm extends Component {
    state = {
        title: "",
        date: "",
        description: "",
        rating: "",
        // photo: "",
        recommendation: true,
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    handleRadioChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.name] = evt.target.value;
        this.setState(stateToChange);
    }


    // react-rating function and fetch call
    setCondition = evt => {
        let reviews = {
            rating: evt
        };
        this.setState({rating: reviews.rating})
    };

    /* Local method for validation, set loadingStatus, create object, invoke the Manager post method, and redirect to the full list
    */
    addNewReview = evt => {
        evt.preventDefault();
        if (this.state.title === "" || this.state.date === "" || this.state.description === "" || this.state.rating === "" || this.state.recommendation === "") {
            window.alert("Please fill out all fields.");
        } else {
            this.setState({ loadingStatus: true });
            const review = {
                title: this.state.title,
                date: this.state.date,
                description: this.state.description,
                rating: this.state.rating,
                recommendation: this.state.recommendation,
                userId: parseInt(this.props.getUser()),
                unitId: parseInt(this.props.unitId)
            };
            console.log("brand new review obj", this.props.user)

            // Create the review and redirect user to review list
            ReviewManager.post(review)
            .then(() => this.props.history.push(`/reviews/${this.props.unitId}`));
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
                            id="title"
                            placeholder="Summarize your experience"
                        />
                        <div className="review-rating">
                        <legend>Rate your experience</legend>
                        <Rating
                            id="condition"
                            initialRating={this.state.rating}
                            onClick={evt => this.setCondition(evt)}
                        />
                        </div>
                        <div className="review-date">
                            <legend>Enter today's date</legend>
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
                            <legend>Describe your experience</legend>
                            <Input
                                className="form-control"
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="description"
                            />
                        </div>
                        {/* <FormGroup>
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
                        </FormGroup> */}
                        <FormGroup tag="fieldset" name="recommendation" className="recommendContainer">
                            <legend>Would you recommend this unit?</legend>
                            <FormGroup check >
                            <Label check>
                                <Input type="radio"
                                        name="recommendation"
                                        value={true}
                                        onChange={this.handleRadioChange}
                                        />{' '}
                                Yes
                            </Label>
                            </FormGroup>
                            <FormGroup >
                            <Label check>
                                <Input
                                    type="radio"
                                    name="recommendation"
                                    value={false}
                                    onChange={this.handleRadioChange}
                                    />{' '}
                                No
                            </Label>
                            </FormGroup>
                        </FormGroup>
                    </div>
                    <div className="alignRight">
                        <Button
                            className="btn btn-primary"
                            type="button"
                            onClick={this.addNewReview}
                            >Add Review
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