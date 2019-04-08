import React from "react";
import * as data from "./../../../services/FetchProfile";


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,

        }
    }


    componentDidMount() {
        data.fetchUser(this.props.match.params.id).then(user => {
            this.setState({
                user: user,
            })
            console.log(user.posts)
        })

    }


    displayUser = () => {
        return (
            <div className="singleUser">
                <div className="center" style={{ marginTop: " 150px" }}>
                    <img src={this.state.user.avatarUrl} alt="..." />
                    <h4>{this.state.user.firstname} {this.state.user.lastname}</h4>
                    <p>{this.state.user.about}</p>
                    <p>Posts: {this.state.user.posts.length} Comments: {this.state.user.comments.length}</p>
                </div>
            </div >
        )
    }


    render() {
        if (!this.state.user) {
            return <h2>Loading...</h2>
        }

        return (
            <>
                <div className="container">
                    {this.displayUser()}
                </div>
            </>
        );
    }
}

export default Profile;
