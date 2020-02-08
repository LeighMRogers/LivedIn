import React, { Component } from "react"
import ReviewManager from "../../modules/ReviewManager"


class LocationEditForm extends Component {
    //set the initial state
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
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateReview = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedReview = {
        // id: this.props.review.id,
        title: this.state.title,
        date: this.state.date,
        description: this.state.description,
        rating: this.state.rating,
        recommendation: this.state.recommendation,
        userId: parseInt(this.props.getUser()),
        unitId: parseInt(this.props.unitId)
      };

      ReviewManager.update(editedReview)
      .then(() => this.props.history.push(`/reviews/${this.props.unitId}`))
    }

    componentDidMount() {
      ReviewManager.get(this.props.match.params.review.id)
      .then(review => {
          this.setState({
            // id: this.props.review.id,
            title: this.state.title,
            date: this.state.date,
            description: this.state.description,
            rating: this.state.rating,
            recommendation: this.state.recommendation,
            userId: parseInt(this.props.getUser()),
            unitId: parseInt(this.props.unitId)
          });
      });
    }

    render() {
      return (
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
                            onClick={this.updateReview}
                            >Add Review
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