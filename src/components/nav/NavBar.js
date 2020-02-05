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
                <ul>
                    <li><Link className="navbar-brand" to="/">LivedIn</Link></li>
                    {(this.props.user) ?
                    <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
                    :
                    <>
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/register">Register</Link></li>
                    </> }
                </ul>
            </Nav>
            </>
        )
    }
}

export default NavBar
