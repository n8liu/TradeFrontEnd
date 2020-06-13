import React, { Component } from 'react'

import './NavBar.css'
import NavItem from './NavItem'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <NavItem item='Home' tolink='/'></NavItem>
                    <NavItem item='Trades' tolink='/trades'></NavItem>
                    <NavItem item='Chart' tolink='/chart'></NavItem>
                </ul>
            </nav>
        );
    }
}

export default NavBar