import React, { Component } from "react";
import logo from "../../images/sb_icon_small.png";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='logo' src={logo} alt='SB-logo'/>
                <a className='company-name' href='#'>SB</a>
                <a className='project-name' href='#'>Text To Speech</a>
            </div>
        )
    }
}

export default Header;
