import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Nav extends Component {
    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        return (
            <>
                <ul className={toggle ? "toggle" : ""}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/about">About</Link></li>
                    
                   
                </ul>
                
            </>
        )
    }
}

export default Nav
