import React, { Component } from "react";
import NavBar from "./components/nav/NavBar";
import ApplicationViews from "./components/ApplicationViews";
import './App.css';
class App extends Component {
  state = {
    user: false,
    landlord: false
  }

  // Check if credentials are in session storage
  //returns true/false
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  getUser = () => {
    return sessionStorage.getItem("credentials")
  }

  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(authObj.id)
    )
    this.setState({
      user: this.isAuthenticated()
    });
    console.log("auth object", authObj)
  }

  landlordCheck = (check) => {
		this.setState({
			landlord: check
		})
	}

  clearUser = () => {
    sessionStorage.clear()
    this.setState({
      user: this.isAuthenticated()
    });
  }

  componentDidMount() {
    this.setState({
      user: this.isAuthenticated()
    })
  }

	render() {
		return (
			<div className='App'>
        <NavBar
            clearUser={this.clearUser}
            user={this.state.user}
            {...this.props}
            activeUser={this.state.activeUser}
            landlord={this.state.landlord}
        />
        <ApplicationViews
            user={this.state.user}
            setUser={this.setUser}
            landlord={this.state.landlord}
            {...this.props}
            activeUser={this.state.activeUser}
        />
			</div>
		);
	}
}
export default App;