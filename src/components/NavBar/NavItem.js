import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

class NavItem extends Component {
    render() {
        return (
            <li>
                <Link to={this.props.tolink}>
                    <button type='button'>
                        {this.props.item}
                    </button>
                </Link>
            </li>
        );
    }
}

export default NavItem