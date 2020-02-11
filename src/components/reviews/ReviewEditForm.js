import React, { Component } from "react"
import ReviewManager from '../../modules/ReviewManager';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Rating from "react-rating";


class ReviewEditForm extends Component {
    //set the initial state
    state = {
        title: "",
        date: "",
        description: "",
        rating: "",
        // photo: "",
        recommendation: "true",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        console.log(evt.target.value, evt.target.name)
        const stateToChange = {};
        console.log("state to change", stateToChange)
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    handleRadioChange = evt => {
        const stateToChange = {};
        console.log("Radio state to change", stateToChange)
        stateToChange[evt.target.name] = evt.target.value;
        this.setState(stateToChange);
    }


    // react-rating function and fetch call
    setCondition = evt => {
        let reviews = {
            rating: evt
        };
        console.log("reviews", reviews.rating)
        this.setState({rating: reviews.rating})
    };

    updateReview = () => {
      this.setState({ loadingStatus: true });
      const editedReview = {
        title: this.state.title,
        date: this.state.date,
        description: this.state.description,
        rating: this.state.rating,
        recommendation: this.state.recommendation,
        userId: parseInt(this.state.userId),
        unitId: parseInt(this.state.unitId)
      };

      ReviewManager.update(this.props.match.params.reviewId, editedReview)
      .then(this.props.getData)
      .then(() => this.props.history.push(`/reviews/${this.state.unitId}`))
    }

    componentDidMount() {
      ReviewManager.get(this.props.match.params.reviewId)
      .then(review => {
          this.setState({
            title: review.title,
            date: review.date,
            description: review.description,
            rating: review.rating,
            recommendation: review.recommendation,
            userId: review.userId,
            unitId: review.unitId,
            loadingStatus: false
          });
      });
    }

    handleClick = evt => {
		evt.preventDefault();
		this.updateReview();
		this.setState({ loadingStatus: false });
	};

    render() {
      return (
        <>
       <div className="form-group">
            <Form>
                <fieldset>
                    <div className="formgrid">
                    <h3>Edit Your Review</h3>
                        <Input
                            className="form-control"
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="title"
                            value={this.state.title}
                            placeholder="Summarize your experience"
                        />
                        <legend>Rate your experience</legend>
                        <Rating
                            id="condition"
                            initialRating={this.state.rating}
                            value={this.state.rating}
                            onClick={evt => this.setCondition(evt)}
                        />
                        <legend>Enter today's date</legend>
                        <div className="review-date">
                            <Input
                                className="form-control"
                                type="date"
                                required
                                value={this.state.date}
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
                                value={this.state.description}
                                onChange={this.handleFieldChange}
                                id="description"
                                placeholder="Describe your rental experience"
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
                        <FormGroup tag="fieldset" name="recommendation">
                            <legend>Would you recommend this unit?</legend>
                            <FormGroup check >
                            <Label check>
                                <Input type="radio"
                                        name="recommendation"
                                        value="true"
                                        checked={this.state.recommendation === "true"}
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
                                    value="false"
                                    checked={this.state.recommendation === "false"}
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
                            onClick={this.handleClick}
                            >Update Review
                        </Button>
                    </div>
                </fieldset>
            </Form>
        </div>
        </>
      );
    }
}

export default ReviewEditForm