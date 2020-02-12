import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Nav } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css";


class NavBar extends Component {

    handleLogout = () => {
        this.props.clearUser();
    }

    render() {
        return (
            <>
            <Nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to="/">LivedIn</Link>
                    <img src="/images/home.svg" alt="LivedIn, a rating app for renters"></img>
                    {(this.props.user) ?
                    <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
                    :
                    <>
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/register">Register</Link></li>
                    </> }
            </Nav>
            </>
        )
    }
}

export default NavBar
