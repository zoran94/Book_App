import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/"><span className="brand-logo">Bitbook</span></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li ><Link to="/"><span className="right-border">Feed</span></Link></li>
                        <li ><Link to="/"><span className="right-border">People</span></Link></li>
                        <li><Link to="/">Profile</Link></li>
                    </ul>
                </div>
            </nav>


        </>
    );
}


export default Header; 