import React, { Component } from 'react';
import AuthManager from '../../modules/AuthManager';
import { Form } from 'reactstrap'

class Login extends Component {
	// Set initial state
	state = {
		name: '',
		email: '',
        // hideReg: true
	};

	// showLogin = () => {
	// 	this.setState({ hideReg: false });
	// };

	// hideReg = () => {
	// 	this.setState({ hideReg: true });
	// };

	// Update state whenever an input field is edited
	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log("handling login field change", this.handleFieldChange)
	};

	handleLogin = (e) => {
        console.log("login button has been clicked")
        e.preventDefault()
        AuthManager.getUserData("users").then((user) => {
            let singleUser = user.find(
                user => {
                    console.log("user data", user.email, user.name)
                    if (user.email.toLowerCase() === this.state.email.toLowerCase() &&
                    user.name.toLowerCase() === this.state.name.toLowerCase()) {
                    return user;
                    }
                }
            );
            if (this.state.name === "") {
                window.alert("Please enter user name")
            } else if (this.state.email === "") {
                window.alert("Please enter password")
            } else if (singleUser) {
                this.props.setUser(singleUser);
            } else {
                window.alert("User name and password do not match")
            }
        })
        console.log("handling login", this.handleLogin)
    }

	render() {
        return (
            <>
            <section className="login-body">
            <div className="form-group">
                <div className="login-container">
                    <h3 className="logRegTitle">Login</h3>
                    <Form onSubmit={this.handleLogin}>
                        <input onChange={this.handleFieldChange}
                            className="form-control"
                            required=""
                            autoFocus=""
                            placeholder="Name"
                            name="name"
                            id="name"/>
                        <input onChange={this.handleFieldChange}
                            className="form-control"
                            type="email"
                            required=""
                            name="email"
                            id="email"
                            placeholder="email" />
                        <button className="btn btn-primary" type="submit">Log In</button>
                    </Form>
                </div>
             </div>
             </section>
            </>
        );
    }
}

export default Login;