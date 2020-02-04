import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Nav } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css";


class NavBar extends Component {

    // handleLogout = () => {
    //     this.props.clearUser();
    // }

    render() {
        return (
            <>
            <Nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">LivedIn</Link>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/register">Register</Link>
            </Nav>
            </>
        )
    }
}

export default NavBar