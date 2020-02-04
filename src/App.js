import React, { Component } from "react";
import NavBar from "./components/nav/NavBar";
import ApplicationViews from "./components/ApplicationViews";
import Login from './components/auth/Login';
import './components/App.css';
class App extends Component {
	state = {
		user: sessionStorage.getItem('activeUser') !== null,
		activeUser: '',
		landlord: ''
	};

	isAuthenticated = () => sessionStorage.getItem('activeUser') !== null;
	setUser = id => {
		sessionStorage.setItem('activeUser', id);
		this.setState({ activeUser: this.getUser(), user: true });
	};

	getUser() {
		if (sessionStorage.getItem('activeUser')) {
			return parseInt(sessionStorage.getItem('activeUser'));
		} else {
			return '';
		}
	}

	adminCheck = (check) => {
		this.setState({
			admin: check
		})
	}

	clearUser = () => {
		sessionStorage.removeItem('activeUser');
		this.setState({
			user: this.isAuthenticated()
		});
	};

	render() {
		return (
			<div className='App'>
        <div className="App">
        <NavBar
            clearUser={this.clearUser}
            user={this.state.user}
            {...this.props}
            activeUser={this.state.activeUser}
            landlord={this.state.landlord}
            // currentUserId={this.props.activeUser}
        />
        <ApplicationViews
            user={this.state.user}
            landlord={this.state.landlord}
            {...this.props}
            activeUser={this.state.activeUser}
        />
        </div>
				{this.state.user ? (
					<>

					</>
				) : (
					<Login
						getUser={this.getUser}
						setUser={this.setUser}
						user={this.state.user}
						{...this.props}
						landlordCheck={this.landlordCheck}
						landlord={this.state.landlord}
						activeUser={this.state.activeUser}
					/>
				)}
			</div>
		);
	}
}
export default App;