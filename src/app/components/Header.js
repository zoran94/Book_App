import React from 'react';
import { Link } from "react-router-dom";
import { getAuthUserId } from "./../../services/authService";
import { withRouter } from "react-router";
import { fetchUser } from "../../services/userService"

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            profilePicture: ""
        }
    }

    onLoadUser = () => {
        fetchUser(getAuthUserId())
        .then((response) => {
            console.log(response);
            this.setState({
                profilePicture:response.photo
            })
        })
    }
    
    clickHandler = () => {
        localStorage.removeItem("key");
        this.props.history.push('/');
    }
    
    componentDidMount(){
        this.onLoadUser()
    }

    render(){

        const color = {
            backgroundColor: "#009587"
            }
        
        return(
            <>
    
                <nav style={color}>
                    <div className="nav-wrapper">
                        <Link to="/feed"><span className="brand-logo">Bitbook</span></Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to={`/user/${getAuthUserId()}`} >{this.state.profilePicture && <img className="circle profilePic" src={`${this.state.profilePicture}`}/> || ""}</Link></li>
                            <li ><Link to="/feed/"><span className="right-border">Feed</span></Link></li>
                            <li ><Link to="/users"><span className="right-border">People</span></Link></li>
                            <li><Link to={`/user/${getAuthUserId()}`} ><span className="right-border">Profile</span></Link></li>
                            <li><span onClick={this.clickHandler}>LogOut</span></li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    } 
}


export default withRouter(Header);

