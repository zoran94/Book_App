import React from 'react';
import { Link } from "react-router-dom";
import {getAuthUserId} from "./../../services/authService";
const Header = (props) => {
    const color = {
        backgroundColor: "#009587"
    }
    return (
        <>

            <nav style={color}>
                <div className="nav-wrapper">
                    <Link to="/"><span className="brand-logo">Bitbook</span></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li ><Link to="/feed/"><span className="right-border">Feed</span></Link></li>
                        <li ><Link to="/users"><span className="right-border">People</span></Link></li>
                        <li><Link to={`/user/${getAuthUserId()}`}>Profile</Link></li>
                    </ul>
                </div>
            </nav>


        </>
    );
}


export default Header;

