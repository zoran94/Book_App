import React from 'react';
import { Link } from 'react-router-dom';
import * as data from "./../../../services/FetchProfile";

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {

        if (!this.state.length) {
            return <h2>Nothing in feed</h2>
        }
        return (
            <Link to='/'></Link>
        );
    }
}

export default Feed;



